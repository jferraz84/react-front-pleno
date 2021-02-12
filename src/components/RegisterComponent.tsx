import React, { useState, useCallback } from 'react'
import createDataFromForm from '../tools/createDataFromForm'
import sleep from '../tools/sleep'
import Card from './Card'
import FormGroup from './FormGroup'
import ResponsiveCenterPage from './ResponsiveCenterPage'
import Spinner from './Spinner'
import { useSelector, useDispatch } from 'react-redux'
import store from '../store'

type User = Exclude<
  store.State['user'],
  null
>

const RegisterComponent = ( { onClickSignIn }: RegisterComponent.Props ) => {
  const [ loading, setloading ] = useState( false )
  const [ msgError, setMsgError ] = useState<string | null>( null )
  const users = useSelector<store.State, store.State['users']>( state => state.users )
  const dispatch = useDispatch()

  const checkIfUserExists = useCallback( ( user: User ) => {
    return users.some( _user => _user.email === user.email )
  }, [ users ] )

  const handlerFormSubmit = useCallback( ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    const user = createDataFromForm( event.currentTarget )
    setloading( true )
    sleep( Math.trunc( Math.random() * 5000 ) )
      .then( () => {
        if ( checkIfUserExists( user ) ) {

          setMsgError( 'email já cadastrado' )

        } else {
          dispatch( { type: 'REGISTER_USER_IN_LIST', ...user } )
          onClickSignIn()
        }
      } )
      .finally( () => setloading( false ) )
  }, [ checkIfUserExists, dispatch, onClickSignIn ] )

  return (
    <ResponsiveCenterPage>
      <Card title='Formulário registro'>
        { msgError && (
          <div className="alert alert-danger" role="alert">
            {msgError}
          </div>
        ) }
        <form onSubmit={handlerFormSubmit}>
          <FormGroup label='Nome' type="text" name="name" required />
          <FormGroup label='E-mail' type="email" name="email" required />
          <FormGroup label='Senha' type="password" name="password" required />
          <div className="my-2">
            <a href="#" onClick={onClickSignIn}>Entrar</a>
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary">
            {loading && <Spinner />}
            {loading
              ? ( <span className='mx-2'>Loading...</span> )
              : 'Registrar-se'}
          </button>
        </form>
      </Card>
    </ResponsiveCenterPage>
  )
}

declare namespace RegisterComponent {
  export interface Props {
    onClickSignIn(): void
  }
}

export default RegisterComponent
import React, { Component } from 'react'
import store from '../store'
import createDataFromForm from '../tools/createDataFromForm'
import sleep from '../tools/sleep'
import Card from './Card'
import FormGroup from './FormGroup'
import ResponsiveCenterPage from './ResponsiveCenterPage'
import Spinner from './Spinner'

class SignInComponent extends Component<SignInComponent.Props> {
  state = {
    loading: false,
    errorMessage: null as string | null
  }
  private handlerSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    const user = createDataFromForm( event.currentTarget )
    this.setState( { loading: true } )
    sleep( Math.trunc( Math.random() * 5000 ) )
      .then( () => {
        if ( !this.props.checkIfUserExists( user ) ) {

          this.setState( { errorMessage: 'usuário/senha inválidos' }, () => {
            setTimeout( () => this.setState( { errorMessage: null } ), 6000 )
          } )

        } else {
          this.props.onSignIn( user )
        }

      } )
      .finally( () => this.setState( { loading: false } ) )
  }
  public render() {
    return (
      <ResponsiveCenterPage>
        { this.props.user
          ? (
            <div>
              <h1>Bem-vindo,</h1>
              <p>Você entrou com o usuário: {this.props.user.email}</p>
            </div>
          )
          : (
            <Card title='Formulário de login'>
              { this.state.errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMessage}
                </div>
              ) }
              <form onSubmit={this.handlerSubmit}>
                <FormGroup label='E-mail' type="email" readOnly={this.state.loading} name="email" required />
                <FormGroup label='Senha' type="password" readOnly={this.state.loading} name="password" required />
                <div className="my-2">
                  <a href="#" onClick={this.props.onRegisterClick}>Registrar-se</a>
                </div>
                <button type="submit" disabled={this.state.loading} className="btn btn-primary">
                  {this.state.loading && <Spinner />}
                  {this.state.loading
                    ? (<span className='mx-2'>Loading...</span>)
                    : 'Entrar'}
                </button>
              </form>
            </Card>
          )}
      </ResponsiveCenterPage>
    )
  }
}

type User = Pick<
  Exclude<
    store.State['user'],
    null
  >,
  'email' | 'password'
>

declare namespace SignInComponent {
  export interface Props {
    user: store.State['user']
    onSignIn( user: User ): void
    onRegisterClick(): void
    checkIfUserExists( user: User ): boolean
  }
}

export default SignInComponent
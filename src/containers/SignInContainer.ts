import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import signInUser from '../actions/signInUser'
import SignInComponent from '../components/SignInComponent'
import store from '../store'

type User = Pick<
  Exclude<
    store.State['user'],
    null
  >,
  'email' | 'password'
>

interface TStateProps {
  user: store.State['user']
  checkIfUserExists( user: User ): boolean
}

const mapStateToProps: MapStateToProps<TStateProps, {}, store.State> = ( state ) => ( {
  user: state.user,
  checkIfUserExists: ( user: User ) => {
    return state.users
      .some( _user => _user.email === user.email && _user.password === user.password )
  }
} )

interface TDispatchProps {
  onSignIn( user: User ): void
}

const mapDispatchToProps: MapDispatchToProps<TDispatchProps, {}> = ( dispatch ) => ( {
  onSignIn: ( user ) => {
    dispatch( signInUser( user ) )
  }
} )

const SignInContainer = connect( mapStateToProps, mapDispatchToProps )( SignInComponent )

export default SignInContainer
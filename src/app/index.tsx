import React, { useState } from 'react'
import { Provider } from 'react-redux'
//import RegisterComponent from '../components/RegisterComponent'
//import SignInContainer from '../containers/SignInContainer'
import store from '../store'

const Page = () => {
  const [ page, setPage ] = useState( 'sign-in' )
  const onRegisterClick = () => { setPage( 'register' ) }
  const onClickSignIn = () => { setPage( 'sign-in' ) }

  switch ( page ) {
    //case 'sign-in': return <SignInContainer onRegisterClick={onRegisterClick}/>
    //case 'register': return <RegisterComponent onClickSignIn={onClickSignIn}/>
    default: return null
  }
}

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
)

export default App
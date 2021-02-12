import store from '../store'
import initialState from '../store/initialState'

const reducer: store.Reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'SIGN_IN_USER': {
      const user = state.users
        .find( _user => _user.email === action.email && _user.password === action.password )

      return { ...state, user: user ?? null }
    }
    case 'REGISTER_USER_IN_LIST': {
      return {
        ...state,
        users: state.users.concat( {
          name: action.name,
          email: action.email,
          password: action.password,
        } )
      }
    }
    default: return state
  }
}

export default reducer
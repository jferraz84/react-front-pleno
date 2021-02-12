import Redux, { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from '../reducers'
import initialState, { State as StoreState } from './initialState'

const store = createStore( reducer, initialState, applyMiddleware( logger ) )

declare namespace store {
  export interface State extends StoreState {}

  export interface Actions {
    'SIGN_IN_USER': { email: string, password: string }
    'SIGN_OUT_USER': {}
    REGISTER_USER_IN_LIST: { email: string, password: string, name: string }
  }

  export type Action<K extends keyof Actions = keyof Actions> = Redux.Action<K> & Actions[K]

  export type ReducerAction = Redux.Action<keyof Actions> & { [key: string]: any }
  export interface Reducer extends Redux.Reducer<State, ReducerAction> {}

  export interface Dispatch extends Redux.Dispatch<Action> {
    <K extends keyof Actions = keyof Actions>( action: Action<K> ): void
  }
}

export default store
import store from '../store'

type User = Pick<
  Exclude<
    store.State['user'],
    null
  >,
  'email' | 'password'
>

const signInUser = ( user: User ): store.Action<'SIGN_IN_USER'> => {
  return { type: 'SIGN_IN_USER', ...user }
}

export default signInUser
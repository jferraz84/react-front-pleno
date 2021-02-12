const initialState: State = {
    user: null,
    users: []
  }
  
  interface User {
    name: string
    email: string
    password: string
  }
  
  export interface State {
    user: null | User
    users: User[]
  }
  
  export default initialState
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionTypes'

const INITIAL_STATE = {
  logged: false,
  user: null,
  token: "",
  loading: false
}

function accountReducer(state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {loading: true, ...state}
    case LOGIN_SUCCESS:
      const { token, user } = action.payload
      localStorage.setItem('auth_token', token);
      return {loading: false, token, user, logged: true}
    case LOGIN_FAILURE:
      localStorage.removeItem('auth_token')
      return INITIAL_STATE
    case LOGOUT:
      localStorage.removeItem('auth_token')
      return INITIAL_STATE
    default:
      return state
  }
}

export default accountReducer

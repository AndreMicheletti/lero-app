import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT
} from '../actionTypes'

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
      return {...state, loading: true}
    case LOGIN_SUCCESS:
      const { token, user } = action.payload
      localStorage.setItem('auth_token', token);
      return {...state, loading: false, token, user, logged: true}
    case LOGIN_FAILURE:
      localStorage.removeItem('auth_token')
      return INITIAL_STATE

    case REGISTER_REQUEST:
      return {...state, loading: true}
    case REGISTER_SUCCESS:
      localStorage.setItem('auth_token', action.payload.token);
      return {...state, loading: false, token: action.payload.token, user: action.payload.user, logged: true}
    case REGISTER_FAILURE:
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

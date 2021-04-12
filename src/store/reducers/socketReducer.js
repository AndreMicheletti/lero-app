import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SOCKET_REQUEST,
  SOCKET_CONNECT,
  SOCKET_FAILURE,
} from '../actionTypes'
import { joinUser, leaveUser } from '../../socket'

const INITIAL_STATE = {
  user: null,
  connected: false,
  loading: false,
  socket: null
}

function socketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, user: action.payload.user}
    case LOGIN_FAILURE:
      return {...state, user: null}

    case SOCKET_REQUEST:
      return {...state, loading: true, connected: false}
    case SOCKET_CONNECT:
      return {connected: true, loading: false, socket: action.payload}
    case SOCKET_FAILURE:
      leaveUser()
      return INITIAL_STATE

    case LOGOUT:
      leaveUser()
      state.socket && state.socket.disconnect(() => console.log('socket disconnected'))
      return INITIAL_STATE
    default:
      return state
  }
}

export default socketReducer

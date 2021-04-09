import {
  SOCKET_REQUEST,
  SOCKET_CONNECT,
  SOCKET_FAILURE,
  LOGOUT,
} from '../actionTypes'

const INITIAL_STATE = {
  connected: false,
  loading: false,
  socket: null
}

function socketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SOCKET_REQUEST:
      return {...state, loading: true, connected: false}
    case SOCKET_CONNECT:
      return {connected: true, loading: false, socket: action.payload}
    case SOCKET_FAILURE:
      return INITIAL_STATE
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default socketReducer

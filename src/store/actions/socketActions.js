import {
  SOCKET_REQUEST,
  SOCKET_CONNECT,
  SOCKET_FAILURE,
} from '../actionTypes'
import { createAndConnectSocket } from '../../socket'

export const connectSocket = () => dispatch => {
  dispatch({ type: SOCKET_REQUEST })
  try {
    const socket = createAndConnectSocket()
    dispatch({ type: SOCKET_CONNECT, payload: socket })
  } catch (e) {
    console.warn(e)
    dispatch({ type: SOCKET_FAILURE })
  }
}

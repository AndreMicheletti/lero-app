import {
  SOCKET_REQUEST,
  SOCKET_CONNECT,
  SOCKET_FAILURE,
} from '../actionTypes'
import { createAndConnectSocket, joinUser } from '../../socket'

export const connectSocket = (userId, onNewConversation, onUpdateConversation) => dispatch => {
  dispatch({ type: SOCKET_REQUEST })
  try {
    const socket = createAndConnectSocket()
    joinUser(socket, userId, onNewConversation, onUpdateConversation)
    dispatch({ type: SOCKET_CONNECT, payload: socket })
  } catch (e) {
    console.warn(e)
    dispatch({ type: SOCKET_FAILURE })
  }
}

import { Socket } from 'phoenix';
import {
  SOCKET_REQUEST,
  SOCKET_CONNECT,
  SOCKET_FAILURE,
} from '../actionTypes'

export const connectSocket = () => async dispatch => {
  dispatch({ type: SOCKET_REQUEST })
  try {
    const token = localStorage.getItem('auth_token')
    console.log('tokeeeen')
    console.log(token)
    const socket = new Socket("ws://localhost:4000/socket", {params: {token: token}})
    socket.connect();
    dispatch({ type: SOCKET_CONNECT, payload: socket })
  } catch (e) {
    console.warn(e)
    dispatch({ type: SOCKET_FAILURE })
  }
}
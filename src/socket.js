import { Socket } from 'phoenix';
import { WEBSOCKET_URL } from './consts'

export const createAndConnectSocket = () => {
  const token = localStorage.getItem('auth_token')
  const socket = new Socket(WEBSOCKET_URL, {params: {token: token}})
  socket.connect();
  return socket
}

export const joinChannel = (socket, conversationId, onReceivedMessageCallback) => {
  const channel = socket.channel(`conversation:${conversationId}`);
  channel.join().receive('ok', (responsePayload) => {
    console.log('joined conversation', responsePayload);
  });

  channel.on("new_message", (response) => {
    onReceivedMessageCallback(response.message)
  })
  return channel
}

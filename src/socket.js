import { Socket } from 'phoenix';

export const createAndConnectSocket = () => {
  const token = localStorage.getItem('auth_token')
  const socket = new Socket("ws://localhost:4000/socket", {params: {token: token}})
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

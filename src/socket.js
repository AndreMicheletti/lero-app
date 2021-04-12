import { Socket } from 'phoenix';
import { WEBSOCKET_URL } from './consts'

let lobbyChannel;
let conversationChannel;

export const createAndConnectSocket = () => {
  const token = localStorage.getItem('auth_token')
  const socket = new Socket(WEBSOCKET_URL, {params: {token: token}})
  socket.connect();
  return socket
}

export const joinConversation = (socket, conversationId, onReceivedMessageCallback) => {
  if (conversationChannel) leaveConversation();

  conversationChannel = socket.channel(`conversation:${conversationId}`);
  conversationChannel.join().receive('ok', (responsePayload) => {
    console.log('joined conversation', responsePayload);
  });

  conversationChannel.on("new_message", (response) => {
    onReceivedMessageCallback(response.message)
  })
}

export const leaveConversation = () => {
  conversationChannel.leave(500).receive("ok", () => console.log("left channel conversation"));
  conversationChannel = null;
}

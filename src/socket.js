import { Socket } from 'phoenix'
import { encryptMessage, parseBase64 } from './crypto'
import { WEBSOCKET_URL } from './consts'

let userChannel;
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

export const sendMessage = (text) => {
  if (!conversationChannel) console.warn('tried to send message disconnected from conversationChannel (sendMessage)');
  const contentPayload = encryptMessage(parseBase64(localStorage.getItem('auth_token')), text)
  conversationChannel.push("send_message", contentPayload)
}

export const leaveConversation = () => {
  if (!conversationChannel) return;
  conversationChannel.leave(500).receive("ok", () => console.log("left channel conversation"));
  conversationChannel = null;
}

export const joinUser = (socket, userId, onNewConversation, onUpdateConversation) => {
  if (userChannel) leaveUser();

  userChannel = socket.channel(`conversation:lobby`);
  userChannel.join().receive('ok', (responsePayload) => {
    console.log('joined user channel', responsePayload);
  });

  userChannel.on("new_conversation", (response) => {
    onNewConversation(response.conversation)
  })
  userChannel.on("upd_conversation", (response) => {
    onUpdateConversation(response.conversation)
  })
}

export const leaveUser = () => {
  if (!userChannel) return;
  userChannel.leave(500).receive("ok", () => console.log("left channel conversation"));
  userChannel = null;
}

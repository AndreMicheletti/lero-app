import axios from 'axios'
import {
  SELECT_CONVERSATION,
  FETCH_CONVERSATION_REQUEST,
  FETCH_CONVERSATION_SUCCESS,
  FETCH_CONVERSATION_FAILURE,
  START_CONVERSATION_REQUEST,
  START_CONVERSATION_SUCCESS,
  START_CONVERSATION_FAILURE,
  FETCH_CURRENT_MESSAGES_REQUEST,
  FETCH_CURRENT_MESSAGES_SUCCESS,
  FETCH_CURRENT_MESSAGES_FAILURE,
  CONVERSATION_RECEIVED_MESSAGE,
  CLEAR_SELECT_CONVERSATION,
  ON_NEW_CONVERSATION,
  ON_UPD_CONVERSATION,
} from '../actionTypes'
import { BACKEND_URL } from '../../consts'

export const selectConversation = (conversation) => { return {type: SELECT_CONVERSATION, payload: conversation} }

export const clearSelectConversation = () => { return {type: CLEAR_SELECT_CONVERSATION } }

export const addConversation = (payload) => { return {type: ON_NEW_CONVERSATION, payload } }

export const updateConversation = (payload) => { return {type: ON_UPD_CONVERSATION, payload } }

export const onReceivedMessage = (payload, user) => {
  return {
    type: CONVERSATION_RECEIVED_MESSAGE,
    payload: {
      id: payload.id,
      content: payload.content,
      time: payload.time,
      direction: payload.user_id === user.id ? 'out' : 'in'
    }
  }
}

export const fetchConversations = () => async dispatch => {
  dispatch({ type: FETCH_CONVERSATION_REQUEST})
  try {
    const token = localStorage.getItem('auth_token')

    const response = await axios.get(BACKEND_URL + '/api/conversations', {
      headers: { 'Authorization': `Bearer ${token}`}
    });
    const {success, conversations} = response.data;
    if (!success) throw Error("could fetch conversations")

    dispatch({ type: FETCH_CONVERSATION_SUCCESS, payload: conversations })
  } catch (e) {
    console.warn(e)
    dispatch({ type: FETCH_CONVERSATION_FAILURE })
  }
}

export const startConversation = (secretCode, onSuccess, onError) => async dispatch => {
  dispatch({ type: START_CONVERSATION_REQUEST})
  try {
    const token = localStorage.getItem('auth_token')

    const response = await axios.post(BACKEND_URL + '/api/message',
    {
      'content': 'Vamos bater um lero',
      'secret_code': secretCode
    },
    { headers: { 'Authorization': `Bearer ${token}`} });
    const {success, message} = response.data;
    if (!success) throw response.data

    dispatch({ type: START_CONVERSATION_SUCCESS, payload: message })
    onSuccess(message.conversation_id)
  } catch (e) {
    console.warn(e)
    dispatch({ type: START_CONVERSATION_FAILURE })
    onError()
  }
}

export const fetchCurrentMessages = (conversationId, onSuccess, onError) => async dispatch => {
  dispatch({ type: FETCH_CURRENT_MESSAGES_REQUEST})
  try {
    const token = localStorage.getItem('auth_token')

    const response = await axios.get(BACKEND_URL + `/api/conversations/${conversationId}/messages`,
    { headers: { 'Authorization': `Bearer ${token}`} });
    const {success} = response.data;
    if (!success) throw response.data

    dispatch({ type: FETCH_CURRENT_MESSAGES_SUCCESS, payload: response.data })
    onSuccess()
  } catch (e) {
    console.warn(e)
    dispatch({ type: FETCH_CURRENT_MESSAGES_FAILURE })
    onError()
  }
}

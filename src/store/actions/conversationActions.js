import axios from 'axios'
import {
  SELECT_CONVERSATION,
  FETCH_CONVERSATION_REQUEST,
  FETCH_CONVERSATION_SUCCESS,
  FETCH_CONVERSATION_FAILURE
} from '../actionTypes'

export const selectConversation = (conversation) => { return {type: SELECT_CONVERSATION, payload: conversation} }

export const fetchConversations = () => async dispatch => {
  dispatch({ type: FETCH_CONVERSATION_REQUEST})
  try {
    const token = localStorage.getItem('auth_token')

    const response = await axios.get('http://localhost:4000/api/conversations', {
      headers: { 'Authorization': `Bearer ${token}`}
    });
    const {success, conversations} = response.data;
    if (!success) throw Error("could not log in")

    dispatch({ type: FETCH_CONVERSATION_SUCCESS, payload: conversations })
  } catch (e) {
    console.warn(e)
    dispatch({ type: FETCH_CONVERSATION_FAILURE })
  }
}

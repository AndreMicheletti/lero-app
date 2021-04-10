import _ from 'lodash'
import {
  LOGOUT,
  SELECT_CONVERSATION,
  CLEAR_SELECT_CONVERSATION,
  FETCH_CONVERSATION_REQUEST,
  FETCH_CONVERSATION_SUCCESS,
  FETCH_CONVERSATION_FAILURE,
  START_CONVERSATION_REQUEST,
  START_CONVERSATION_SUCCESS,
  START_CONVERSATION_FAILURE,
  FETCH_CURRENT_MESSAGES_REQUEST,
  FETCH_CURRENT_MESSAGES_SUCCESS,
  FETCH_CURRENT_MESSAGES_FAILURE,
  CONVERSATION_RECEIVED_MESSAGE
} from '../actionTypes'

const INITIAL_STATE = {
  conversations: [
    {
      id: 1,
      title: 'Hello world',
      messages: [
        {
          id: 1,
          content: 'Hello',
          direction: 'out'
        },
        {
          id: 2,
          content: 'Hi there',
          direction: 'in'
        },
      ] 
    }
  ],
  currentConversation: {},
  loading: false
}

function conversationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CONVERSATION_REQUEST:
      return {...state, loading: true}
    case FETCH_CONVERSATION_SUCCESS:
      return {...state, conversations: action.payload, loading: false}
    case FETCH_CONVERSATION_FAILURE:
      return {...state, conversations: [], loading: false}

    case FETCH_CURRENT_MESSAGES_REQUEST:
      return {...state, loading: true}
    case FETCH_CURRENT_MESSAGES_SUCCESS:
      const { conversation, messages } = action.payload
      return {...state, loading: false, currentConversation: {...conversation, messages: sortMessages(messages) }}
    case FETCH_CURRENT_MESSAGES_FAILURE:
      return {...state, loading: false, currentConversation: {...state.currentConversation, messages: []}}
    
    case CONVERSATION_RECEIVED_MESSAGE:
      if (state.currentConversation.id) {
        const messages = [...state.currentConversation.messages, action.payload]
        return {...state, currentConversation: {...state.currentConversation, messages: sortMessages(messages) }}
      } else {
        return state
      }

    case SELECT_CONVERSATION:
      return {...state, currentConversation: action.payload}
    case CLEAR_SELECT_CONVERSATION:
      return {...state, currentConversation: {}}
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

function sortMessages (messages) {
  return _.orderBy(messages, 'time', 'desc')
}

export default conversationReducer

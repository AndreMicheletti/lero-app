import {
  LOGOUT,
  SELECT_CONVERSATION,
  FETCH_CONVERSATION_REQUEST,
  FETCH_CONVERSATION_SUCCESS,
  FETCH_CONVERSATION_FAILURE
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
      return {...state, conversations:[], loading: false}
    case SELECT_CONVERSATION:
      return {...state, currentConversation: action.payload}
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default conversationReducer

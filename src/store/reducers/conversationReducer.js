import { LOGOUT, SELECT_CONVERSATION } from '../actionTypes'

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
    case SELECT_CONVERSATION:
      return {...state, currentConversation: action.payload}
    case LOGOUT:
      return INITIAL_STATE
    default:
      return state
  }
}

export default conversationReducer

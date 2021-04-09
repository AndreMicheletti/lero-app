import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import conversationReducer from './conversationReducer'
import socketReducer from './socketReducer'

export default combineReducers({
  account: accountReducer,
  conversation: conversationReducer,
  socket: socketReducer
})

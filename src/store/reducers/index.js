import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import conversationReducer from './conversationReducer'

export default combineReducers({
  account: accountReducer,
  conversation: conversationReducer
})

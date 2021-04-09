import { SELECT_CONVERSATION } from '../actionTypes'

export const selectConversation = (conversation) => { return {type: SELECT_CONVERSATION, payload: conversation} }

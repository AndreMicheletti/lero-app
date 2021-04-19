import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

import TerminalText from './TerminalText'
import { selectConversation } from '../store/actions/conversationActions'

const useStyles = makeStyles((theme) => ({
  conversation: {
    padding: '10px 15px',
    marginBottom: 8,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridColumnGap: 15,
    alignItems: 'center',
    backgroundColor: '#4f4f4f',
    color: theme.palette.text.accent
  }
}))

function ConversationCard ({ id, conversation, selectConversation }) {
  const classes = useStyles()

  return (
    <Link to={`/conversations/${id}`} onClick={() => selectConversation(conversation)}>
      <TerminalText prefix={`<${id}> conversation#/ `}>{conversation.title}</TerminalText>
      {conversation.updated && (<TerminalText prefix=' ' color="red">{'<!!>'}</TerminalText>)}
    </Link>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    selectConversation: (conversation) => dispatch(selectConversation(conversation))
  }
}

export default connect(null, mapDispatchToProps)(ConversationCard)

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import Conversation from './Conversation'
import ConversationCard from '../components/ConversationCard'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    maxHeight: '100vh'
  },
}))

function ConversationRouter ({ account, conversations, loading }) {
  let match = useRouteMatch();
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div style={{ height: 10 }} />
      <Switch>
        <Route path={`${match.path}conversations/:conversationId`}>
          <Conversation />
        </Route>
        <Route path={match.path}>
          {conversations.map(conversation => {
            return (<ConversationCard key={conversation.id} id={conversation.id} conversation={conversation} />)
          })}
        </Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    account: state.account,
    conversations: state.conversation.conversations,
    loading: state.conversation.loading,
  }
}

export default connect(mapStateToProps)(ConversationRouter)

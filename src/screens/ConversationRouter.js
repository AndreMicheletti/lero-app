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

import { fetchConversations } from '../store/actions/conversationActions'
import { ContactSupportOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    maxHeight: '100vh'
  },
}))

function ConversationRouter ({ account, conversations, loading, fetchConversations }) {
  let match = useRouteMatch();
  const classes = useStyles()
  React.useEffect(() => {
    fetchConversations()
  }, [])

  const renderConversations = () => {
    if (loading) {
      return <span>loading...</span>
    }

    if (!conversations || conversations.length == 0) {
      return <span>Nenhuma conversa...</span>
    }

    return conversations.map(convs => {
      return (<ConversationCard key={convs.id} id={convs.id} conversation={convs} />)
    })
  }

  return (
    <div className={classes.root}>
      <div style={{ height: 10 }} />
      <Switch>
        <Route path={`${match.path}conversations/:conversationId`}>
          <Conversation />
        </Route>
        <Route path={match.path}>
          {renderConversations()}
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

const mapDispatchToProps = dispatch => {
  return {
    fetchConversations: () => dispatch(fetchConversations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationRouter)

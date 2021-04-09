import React from 'react'
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

function ConversationRouter (props) {
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
          <ConversationCard id='1' userName='Hello World' />
        </Route>
      </Switch>
    </div>
  )
}

export default ConversationRouter

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
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
  },
}))

function ConversationRouter (props) {
  let match = useRouteMatch();
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Switch>
        <Route path={`${match.path}/:conversationId`}>
          <Conversation />
        </Route>
        <Route path={match.path}>
          <div style={{ height: 10 }} />
          <ConversationCard id='1' userName='Hello World' />
        </Route>
      </Switch>
    </div>
  )
}

export default ConversationRouter

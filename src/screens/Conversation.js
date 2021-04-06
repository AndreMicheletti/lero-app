import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

import { useParams } from "react-router-dom";

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import MessageBubble from '../components/MessageBubble'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
  },
  head: {
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridColumnGap: 15,
    alignItems: 'center',
    textAlign: 'right'
  },
  messages: {

  },
  paper: {
    padding: '10px 15px',
    backgroundColor: '#4f4f4f',
    color: '#fff'
  }
}))

function Conversation (props) {
  let { conversationId } = useParams();
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.head}>
          <Link to="/conversations">
            <ArrowBackIcon />
          </Link>
          <p>Hello World</p>
          <Avatar />
        </div>
        <Divider />
        <div className={classes.messages}>
          <MessageBubble content="Oi" />
          <MessageBubble content="Oi" outbound={true} />
          <MessageBubble content="Mensagem grandona" outbound={true} />
          <MessageBubble content="Vms ver oq acontece" />
          <MessageBubble content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" outbound={true} />
          <MessageBubble content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
        </div>
      </Paper>
    </div>
  )
}

export default Conversation

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

import { useParams } from "react-router-dom";

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import MessageBubble from '../components/MessageBubble'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
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
  paper: {
    padding: '10px 15px',
    backgroundColor: '#4f4f4f',
    color: '#fff',
    display: 'grid',
    gridTemplateRows: '55px 10px 55vh 10px 40px'
  },
  messages: { 
    display: 'flex',
    flexDirection: 'column-reverse',
    overflowX: 'hidden',
    overflowY: 'overlay',
    paddingRight: 20,
  },
  inputBar: {
    display: 'grid',
    gridTemplateColumns: '1fr 40px',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
}))

function Conversation (props) {
  let { conversationId } = useParams();
  const classes = useStyles()
  const [text, setText] = React.useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.head}>
          <Link to="/">
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
          <MessageBubble content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
          <MessageBubble content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
          <MessageBubble content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
        </div>
        <Divider />
        <div className={classes.inputBar}>
          <TextField
            color="primary"
            value={text}
            onChange={handleChange}
          />
          <IconButton aria-label="delete" className={classes.margin} size="small">
            <SendIcon fontSize="default" style={{ color: '#fff' }} />
          </IconButton>
        </div>
      </Paper>
    </div>
  )
}

export default Conversation

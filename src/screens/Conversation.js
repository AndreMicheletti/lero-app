import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useHistory } from "react-router-dom"
import { withSnackbar } from 'notistack'

import { useParams } from "react-router-dom";

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import MessageBubble from '../components/MessageBubble'

import { fetchCurrentMessages } from '../store/actions/conversationActions'

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
    paddingBottom: 5,
  },
  inputBar: {
    display: 'grid',
    gridTemplateColumns: '1fr 40px',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
}))

function Conversation ({ conversation, fetchCurrentMessages }) {
  let history = useHistory()
  const classes = useStyles()
  const [text, setText] = React.useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  React.useEffect(() => {
    fetchCurrentMessages(
      conversation.id,
      () => {},
      () => {
      enqueueSnackbar('Erro ao carregar mensagens')
      history.push("/")
    })
  }, [])

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.head}>
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <p>{conversation.title}</p>
          <Avatar />
        </div>
        <Divider />
        <div className={classes.messages}>
          {conversation.messages && conversation.messages.map(message => {
            return (<MessageBubble key={message.id} content={message.content} direction={message.direction} />)
          })}
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

const mapStateToProps = state => {
  return {
    conversation: state.conversation.currentConversation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentMessages: (conversationId, onSuccess, onError) => dispatch(fetchCurrentMessages(conversationId, onSuccess, onError))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Conversation))

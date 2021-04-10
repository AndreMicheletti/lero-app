import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useHistory } from "react-router-dom"
import { withSnackbar } from 'notistack'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import InfiniteScroll from 'react-infinite-scroll-component'

import HttpsIcon from '@material-ui/icons/Https'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import MessageBubble from '../components/MessageBubble'
import TerminalText from '../components/TerminalText'

import { fetchCurrentMessages, onReceivedMessage, clearSelectConversation } from '../store/actions/conversationActions'
import { joinChannel } from '../socket'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    position: 'relative',
  },
  socketDown: {
    width: '100%',
    height: '100%',
    background: '#00000055',
    position: 'absolute'
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

function Conversation ({
  currentUser,
  conversation,
  fetchCurrentMessages,
  onReceivedMessage,
  socket,
  socketConnected,
  enqueueSnackbar,
  clearSelectConversation,
  loading
}) {
  let history = useHistory()
  const classes = useStyles()
  const [text, setText] = React.useState('')
  const [channel, setChannel] = React.useState(null)
  const messageInput = useRef(null)
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const focusInput = () => messageInput.current.focus()

  React.useEffect(() => {
    fetchCurrentMessages(
      conversation.id,
      () => {},
      () => {
      enqueueSnackbar('Erro ao carregar mensagens', { variant: 'warning' })
      history.push("/")
    })
    return () => {
      clearSelectConversation()
    }
  }, [])

  React.useEffect(() => {
    if (!channel && socketConnected)
      setChannel(joinChannel(socket, conversation.id, (message) => {
        onReceivedMessage(message, currentUser)
      }))
    return () => {
      if (channel) channel.leave()
    }
  }, [socketConnected])

  const trySendMessage = (e) => {
    e.preventDefault()
    if (!channel) {
      enqueueSnackbar('Não conectado ao canal', { variant: 'warning' })
      return
    }
    if (!text || text === '') {
      enqueueSnackbar('Digite a mensagem', { variant: 'warning' })
      return
    }
    try {
      channel.push('send_message', {content: text})
    } finally {
      setText('')
      focusInput()
    }
  }

  const renderMessages = () => {
    if (loading) return null;

    if (socketConnected && conversation && conversation.messages) {
      return (
        <div className={classes.messages}>
          {conversation.messages && conversation.messages.map(message => {
            return (
              <MessageBubble 
                key={message.id}
                yourName={currentUser.name}
                targetName={conversation.title}
                content={message.content}
                direction={message.direction}
                time={message.time}
              />
            )
          })}
        </div>
      )
    }
  }

  return (
    <div className={classes.root}>
      {!socketConnected && <div className={classes.socketDown}></div>}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.paper}>
        <div className={classes.head}>
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <TerminalText prefix="#/ @">{conversation.title}</TerminalText>
          <HttpsIcon />
        </div>
        <Divider />
        <div className={classes.messages}>
          {renderMessages()}
        </div>
        <Divider />
        <form className={classes.inputBar} onSubmit={trySendMessage} noValidate autoComplete={'false'}>
          <TextField
            autoFocus={true}
            inputRef={messageInput}
            color="primary"
            value={text}
            onChange={handleChange}
          />
          <IconButton aria-label="delete" className={classes.margin} size="small" type="submit">
            <SendIcon fontSize="default" style={{ color: '#fff' }} />
          </IconButton>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.account.user,
    conversation: state.conversation.currentConversation,
    loading: state.conversation.loading,
    socket: state.socketConnection.socket,
    socketConnected: state.socketConnection.connected,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReceivedMessage: (message, user) => dispatch(onReceivedMessage(message, user)),
    clearSelectConversation: () => dispatch(clearSelectConversation()),
    fetchCurrentMessages: (conversationId, onSuccess, onError) => dispatch(fetchCurrentMessages(conversationId, onSuccess, onError))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Conversation))

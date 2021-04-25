import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { withSnackbar } from 'notistack'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { doLogin, doAutoLogin, doRegister } from '../store/actions/accountActions'
import { addConversation, updateConversation } from '../store/actions/conversationActions'
import { connectSocket } from '../store/actions/socketActions'
import { useHistory } from 'react-router'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
    paddingTop: 15,
    padding: 8
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

function LoginScreen (props) {
  const classes = useStyles()
  const history = useHistory()
  const [secretCode, setCode] = React.useState('')
  const [newSecretCode, setNewCode] = React.useState('')
  const [name, setName] = React.useState('')
  const [password, setPass] = React.useState('')
  const [easter, setEgg] = React.useState(false)
  const handleChangeCode = (event) => setCode(event.target.value)
  const handleChangePass = (event) => setPass(event.target.value)
  const handleChangeNewCode = (event) => setNewCode(event.target.value)
  const handleChangeName = (event) => setName(event.target.value)

  React.useEffect(() => {
    if (secretCode.toLowerCase() === 'lero') {
      setEgg(true)
    } else {
      if (easter) setEgg(false)
    }
  }, [secretCode])

  React.useEffect(() => {
    if (newSecretCode.toLowerCase().toString().includes('lero')) props.enqueueSnackbar("You're funny", { variant: 'warning' })
    if (newSecretCode.toLowerCase().toString().includes('admin')) props.enqueueSnackbar("Don't even try", { variant: 'warning' })
  }, [newSecretCode])

  React.useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!!token && token !== '') {
      props.doAutoLogin(token, (user) => {
        props.connectSocket(user.id, props.addConversation, props.updateConversation)
        history.push("/")
      }, () => {})
    }
  }, [])

  const tryLogin = (e) => {
    e.preventDefault()
    if (secretCode === '' || password === '') {
      props.enqueueSnackbar('Fields missing', { variant: 'warning' })
    } else {
      props.doLogin(secretCode, password, (user) => {
        props.connectSocket(user.id, props.addConversation, props.updateConversation)
      }, () => {
        props.enqueueSnackbar('Login failed. Check your credentials.', { variant: 'error' })
      })
    }
  }

  const tryRegister = (e) => {
    e.preventDefault()
    if (newSecretCode.toLowerCase().toString().includes('lero')) {
      props.enqueueSnackbar("Choose something funnier", { variant: 'info' })
      return
    }
    // if (newSecretCode.toLowerCase().toString().includes('admin')) {
    //   props.enqueueSnackbar("You tried, ok... BLOCKED", { variant: 'warning' })
    //   return
    // }
    if (newSecretCode === '' || password === '' || name == '') {
      props.enqueueSnackbar('Fields missing', { variant: 'warning' })
    } else {
      props.doRegister(newSecretCode, name, password, (user) => {
        props.connectSocket(user.id, props.addConversation, props.updateConversation)
      }, () => {
        props.enqueueSnackbar('Register failed. Secret code already been used', { variant: 'error' })
      })
    }
  }

  return (
    <div className={classes.root}>
      <form onSubmit={easter ? tryRegister : tryLogin} autoComplete="no">
        <Backdrop className={classes.backdrop} open={props.account.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <TextField
          label={easter ? "You want to lero?" : "Secret code"}
          value={secretCode}
          onChange={handleChangeCode}
          variant="outlined"
          color="secondary"
          autoComplete="no"
        />
        <div style={{ height: 10 }} />
        {easter && (
          <TextField
            value={newSecretCode}
            onChange={handleChangeNewCode}
            label="Register Secret Code"
            variant="outlined"
            color="secondary"
            autoComplete="new-password"
          />
        )}
        {easter && (
          <React.Fragment>
            <div style={{ height: 10 }} />
            <TextField
              value={name}
              onChange={handleChangeName}
              label="Your name"
              variant="outlined"
              color="secondary"
              autoComplete="new-password"
            />
          </React.Fragment>
        )}
        <div style={{ height: 10 }} />
        <TextField
          type="password"
          value={password}
          onChange={handleChangePass}
          label="Pass"
          variant="outlined"
          color="secondary"
          autoComplete="new-password"
        />
        <div style={{ height: 15 }} />
        <Button type="submit" variant="contained" color="secondary">
          {easter ? "Register" : "Login"}
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (secretCode, password, onSuccess, onError) => dispatch(doLogin(secretCode, password, onSuccess, onError)),
    doAutoLogin: (token, onSuccess, onError) => dispatch(doAutoLogin(token, onSuccess, onError)),
    doRegister: (secretCode, name, password, onSuccess, onError) => dispatch(doRegister(secretCode, name, password, onSuccess, onError)),
    connectSocket: (userId, onNewConversation, onUpdateConversation) => dispatch(connectSocket(userId, onNewConversation, onUpdateConversation)),
    addConversation: (payload) => dispatch(addConversation(payload)),
    updateConversation: (payload) => dispatch(updateConversation(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(LoginScreen))

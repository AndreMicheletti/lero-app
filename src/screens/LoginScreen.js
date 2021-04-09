import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { withSnackbar } from 'notistack'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { doLogin, doAutoLogin } from '../store/actions/accountActions'
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
  const [secretCode, setCode] = React.useState('');
  const [password, setPass] = React.useState('');
  const handleChangeCode = (event) => setCode(event.target.value)
  const handleChangePass = (event) => setPass(event.target.value)

  React.useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!!token && token !== '') {
      props.doAutoLogin(token, () => {
        props.connectSocket()
        history.push("/")
      }, () => {})
    }
  }, [])

  const tryLogin = (e) => {
    e.preventDefault()
    if (secretCode === '' || password === '') {
      props.enqueueSnackbar('Preencha os campos', { variant: 'warning' })
    } else {
      props.doLogin(secretCode, password, () => {
        props.connectSocket()
      }, () => {
        props.enqueueSnackbar('Login falhou. Verifique os dados.', { variant: 'error' })
      })
    }
  }

  return (
    <div className={classes.root}>
      <form onSubmit={tryLogin}>
        <Backdrop className={classes.backdrop} open={props.account.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <TextField
          label="Código secreto"
          value={secretCode}
          onChange={handleChangeCode}
          variant="outlined"
          color="secondary"
        />
        <div style={{ height: 10 }} />
        <TextField
          type="password"
          value={password}
          onChange={handleChangePass}
          label="Senha"
          variant="outlined"
          color="secondary"
        />
        <div style={{ height: 15 }} />
        <Button type="submit" variant="contained" color="secondary">
          Entrar
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
    connectSocket: () => dispatch(connectSocket()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(LoginScreen))

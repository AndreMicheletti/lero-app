import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { withSnackbar } from 'notistack'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { doLogin } from '../store/actions/accountActions'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
    paddingTop: 15,
    padding: 8
  },
}))

function LoginScreen (props) {
  const classes = useStyles()
  const [secretCode, setCode] = React.useState('');
  const [password, setPass] = React.useState('');
  const handleChangeCode = (event) => setCode(event.target.value)
  const handleChangePass = (event) => setPass(event.target.value)

  const tryLogin = () => {
    if (secretCode === '' || password === '') {
      props.enqueueSnackbar('Preencha os campos')
    } else {
      props.doLogin(secretCode, password)
    }
  }

  return (
    <div className={classes.root}>
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
      <Button variant="contained" color="secondary" onClick={tryLogin}>
        Entrar
      </Button>
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
    doLogin: (secretCode, password) => dispatch(doLogin(secretCode, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(LoginScreen))

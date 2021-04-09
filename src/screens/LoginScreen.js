import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

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

  return (
    <div className={classes.root}>
      <TextField
        label="Código secreto"
        defaultValue=""
        variant="outlined"
      />
      <div style={{ height: 10 }} />
      <TextField
        type="password"
        label="Senha"
        defaultValue=""
        variant="outlined"
      />
      <div style={{ height: 15 }} />
      <Button variant="contained" color="secondary" onClick={() => props.doLogin('admin', '123')}>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { TextFields } from '@material-ui/icons'


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
        label="senha"
        defaultValue=""
        variant="outlined"
      />
      <div style={{ height: 15 }} />
      <Button variant="contained" color="secondary">
        Entrar
      </Button>
    </div>
  )
}

export default LoginScreen

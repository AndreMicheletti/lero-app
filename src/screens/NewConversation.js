import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { withSnackbar } from 'notistack'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { startConversation } from '../store/actions/conversationActions'
import { useHistory } from 'react-router';

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

function NewConversation ({ account, startConversation, enqueueSnackbar }) {
  const classes = useStyles()
  const history = useHistory()
  const [secretCode, setText] = React.useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const tryStartConversation = (e) => {
    e.preventDefault();
    if (secretCode && secretCode !== '') {
      startConversation(secretCode, (conversationId) => {
        history.push("/conversations/" + conversationId)
      }, () => {
        enqueueSnackbar('Código secreto não encontrado', { variant: 'info' })
      })
    } else {
      enqueueSnackbar('Preencha o campo', { variant: 'warning' })
    }
  }

  return (
    <div className={classes.root}>
      <form onSubmit={tryStartConversation}>
        <TextField
          label="Código secreto"
          color="secondary"
          value={secretCode}
          onChange={handleChange}
          variant="outlined"
        />
        <div style={{ height: 15 }} />
        <Button type="submit" variant="contained" color="secondary">
          Iniciar Conversa
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
    startConversation: (secretCode, onSuccess, onError) => dispatch(startConversation(secretCode, onSuccess, onError))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(NewConversation))

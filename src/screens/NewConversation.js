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

  const tryStartConversation = () => {
    if (secretCode && secretCode !== '') {
      startConversation(secretCode, (conversationId) => {
        history.push("/conversations/" + conversationId)
      }, () => {
        enqueueSnackbar('Não encontrado')
      })
    } else {
      enqueueSnackbar('Preencha o campo')
    }
  }

  return (
    <div className={classes.root}>
      <TextField
        label="Código secreto"
        color="secondary"
        value={secretCode}
        onChange={handleChange}
        variant="outlined"
      />
      <div style={{ height: 15 }} />
      <Button variant="contained" color="secondary" onClick={tryStartConversation}>
        Iniciar Conversa
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
    startConversation: (secretCode, onSuccess, onError) => dispatch(startConversation(secretCode, onSuccess, onError))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(NewConversation))

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
  },
}))

function Conversation (props) {
  let { conversationId } = useParams();
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <p>Você está na conversa {conversationId}</p>
    </div>
  )
}

export default Conversation

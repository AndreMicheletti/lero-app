import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  conversation: {
    padding: '10px 15px',
    marginBottom: 8,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridColumnGap: 15,
    alignItems: 'center',
    backgroundColor: '#4f4f4f',
    color: '#fff'
  }
}))

function ConversationCard ({ id, userName }) {
  const classes = useStyles()

  return (
    <Link to={`/conversations/${id}`}>
      <Paper className={classes.conversation}>
        <Avatar />
        <p>{userName}</p>
      </Paper>
    </Link>
  )
}

export default ConversationCard

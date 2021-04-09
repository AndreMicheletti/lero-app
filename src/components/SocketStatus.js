import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import HttpsIcon from '@material-ui/icons/Https'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: theme.spacing(1),
    marginRight: 8,
    borderRadius: 40
  },
}))

const GREEN = "#74a735"
const ORANGE = "#d0a219"
const RED = "#d01919"

function SocketStatus ({ status }) {
  const classes = useStyles()
  const { connected, loading } = status

  return (
    <div className={classes.root} style={{ background: loading ? ORANGE : (connected ? GREEN : RED) }}>
      <HttpsIcon color="inherit" />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    status: state.socketConnection
  }
}

export default connect(mapStateToProps)(SocketStatus)

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import TerminalText from './TerminalText'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
}))

const GREEN = "#FFCF99"
const ORANGE = "#666"

function SocketStatus ({ status }) {
  const classes = useStyles()
  const { connected, loading } = status
  const color = loading ? ORANGE : (connected ? GREEN : ORANGE)
  const text = loading ? 'connecting...' : (connected ? 'connected' : 'disconnected')

  return (
    <div className={classes.root}>
      <TerminalText color='#FFF' style={{ fontSize: '0.65em', fontWeight: 100, paddingRight: 5 }}> 
        status: 
      </TerminalText>
      <TerminalText color={color} style={{ fontSize: '0.65em', fontWeight: 600 }}> 
        {text}
      </TerminalText>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    status: state.socketConnection
  }
}

export default connect(mapStateToProps)(SocketStatus)

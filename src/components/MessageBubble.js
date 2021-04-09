import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  line: {
    marginBottom: 4,
    marginTop: 4,
    display: 'grid',
    alignItems: 'center',
    overflowWrap: 'anywhere',
  },
  bubble: {
    gridArea: 'bubble',
    padding: '10px 15px',
    backgroundColor: '#4f4f4f',
    color: '#fff'
  },
}))

function MessageBubble ({ content, time, direction }) {
  const classes = useStyles()
  const outbound = direction === 'out'

  const normalStyle = {
    gridTemplateAreas: '"bubble none"',
    gridTemplateColumns: 'auto minmax(min-content, 100%)',
  }
  const outboundStyle = {
    gridTemplateAreas: '"none bubble"',
    gridTemplateColumns: 'minmax(min-content, 100%) auto',
  }
  const backgroundColor = outbound ? '#b55f5f' : '#b58f5f'

  return (
    <div className={classes.line} style={outbound ? outboundStyle : normalStyle}>
      <Paper className={classes.bubble} style={{ backgroundColor }}>
        <span>{content}</span>
      </Paper>
      <span style={{ gridArea: 'none' }}/>
    </div>
  )
}

export default MessageBubble

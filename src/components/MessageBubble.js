import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import TerminalText from './TerminalText'

const useStyles = makeStyles((theme) => ({
  line: {
    marginBottom: 4,
    marginTop: 4,
    display: 'grid',
    alignItems: 'flex-start',
    overflowWrap: 'anywhere',
    gridGap: 10
  },
  bubble: {
    gridArea: 'bubble',
    color: '#fff'
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gridArea: 'name',
    overflowWrap: 'anywhere'
  },
  none: {
    gridArea: 'none',
  }
}))

function MessageBubble ({ yourName, targetName, content, time, direction }) {
  const classes = useStyles()
  const outbound = direction === 'out'

  const normalStyle = {
    gridTemplateAreas: '"name bubble none"',
    gridTemplateColumns: 'auto minmax(min-content, 100%) auto',
    textAlign: 'left'
  }
  const outboundStyle = {
    gridTemplateAreas: '"none bubble name"',
    gridTemplateColumns: 'auto minmax(min-content, 100%) auto',
    textAlign: 'right'
  }
  const color = outbound ? '#b55f5f' : '#b58f5f'
  const formattedTime = time.toString().substr(10)

  return (
    <div className={classes.line} style={outbound ? outboundStyle : normalStyle}>
      <div className={classes.bubble}>
        <TerminalText style={{ fontWeight: 100 }}>{content}</TerminalText>
      </div>
      <div className={classes.name}>
        <TerminalText color={color} style={{ fontWeight: 500 }}>
          {outbound ? '@' + yourName : '@' + targetName}
        </TerminalText>
        <TerminalText color={color} style={{ fontSize: '0.8em'}}>
          {formattedTime}
        </TerminalText>
      </div>
      <span className={classes.none}></span>
    </div>
  )
}

export default MessageBubble

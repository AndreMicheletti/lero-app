import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  terminal: {
    fontFamily: 'VCRMono',
    fontWeight: 100,
    fontSize: 16,
    color: theme.palette.text.primary
  }
}))

export default function TerminalText ({ prefix, color, children, style = {} }) {
  const classes = useStyles()
  return (
    <span className={classes.terminal} style={{ ...style, color: color }}>
      {prefix}{children}
    </span>
  )
}

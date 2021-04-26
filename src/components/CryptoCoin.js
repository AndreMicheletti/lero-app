import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
	},
  description: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 5,
    color: theme.palette.primary.main,
    fontSize: 22,
  },
  icon: {
    width: 40,
    height: 40,
    maxWidth: 40,
    maxHeight: 40,
  },
  amount: {
    fontSize: '1em',
    opacity: 1
  },
  name: {
    marginBottom: -8,
    fontSize: '0.8em',
    opacity: 0.75
  }
}))

function CryptoCoin ({ children, name, amount = 0 }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {children}
      <div className={classes.description}>
        <span className={classes.name}>
          {name}
        </span>
        <span className={classes.amount}>
          {amount.toString().padStart(3, '0')}
        </span>
      </div>
    </div>
  )
}

export default CryptoCoin;
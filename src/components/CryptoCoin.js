import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import UpIcon from '@material-ui/icons/TrendingUp'
import DownIcon from '@material-ui/icons/TrendingDown'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
	},
  coin: {},
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

function CryptoCoin ({ children, name, amount = 0, reversed = false, trending = null }) {
  const classes = useStyles()

  const parseAmount = (x) => {
    if (x > 10000) {
      return x.toFixed(0)
    } else if (x < 1) {
      return x.toFixed(4).toString().padStart(3, '0')
    } else {
      return x.toFixed(0).toString().padStart(3, '0')
    }
  }

  const renderTrending = () => {
    const defaultStyle = { fontSize: 20, marginLeft: 5, marginRight: 5, fontWeight: 500 }
    switch (trending) {
      case 'up':
        return <UpIcon style={{ ...defaultStyle, color: 'green' }} />
      case 'down':
        return <DownIcon style={{ ...defaultStyle, color: 'red' }} />
      default:
        return null
    }
  }

  if (reversed) {
    return (
      <div className={classes.root} style={{ textAlign: 'right' }}>
        <div className={classes.description}>
          <span className={classes.name}>
            {name}
            {renderTrending()}
          </span>
          <span className={classes.amount}>
            {parseAmount(amount)}
          </span>
        </div>
        <div className={classes.coin}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.coin}>
        {children}
      </div>
      <div className={classes.description}>
        <span className={classes.name}>
          {name}
          {renderTrending()}
        </span>
        <span className={classes.amount}>
          {parseAmount(amount)}
        </span>
      </div>
    </div>
  )
}

export default CryptoCoin;
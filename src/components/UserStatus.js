import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  button: {},
  userName: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'right'
  }
}))

function UserStatus ({ account }) {
  const classes = useStyles()

  if (account.logged) {
    return (
      <div className={classes.root}>
        <div className={classes.userName}>
          <span style={{ fontSize: '1.2em', fontWeight: 500 }}>{account.user.name}</span>
          <span>{account.user.secretCode}</span>
        </div>
      </div>
    )
  }

  return (
    <Button color="inherit" className={classes.button}>
      Login
    </Button>
  )
  
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(UserStatus)

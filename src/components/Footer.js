import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import SocketStatus from './SocketStatus'
import CryptoCoin from './CryptoCoin'

import rupeeIcon from '../assets/rupee_blue.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
	},
  wallet: {
    flex: 1,
  }
}))

function Footer ({ status, account }) {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.root}>
      <div className={classes.wallet}>
        {account.logged && (
          <CryptoCoin name={'LRC'} amount={account.user.coins ? account.user.coins : 0}>
            <img src={rupeeIcon} width={38} height={38}/>
          </CryptoCoin>
        )}
      </div>
      <SocketStatus />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    status: state.socketConnection,
    account: state.account
  }
}

export default connect(mapStateToProps)(Footer)

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { PRIMARY } from '../theme'
import CryptoCoin from '../components/CryptoCoin'

import rupeeIcon from '../assets/rupee_blue.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90vh',
    flexGrow: 1,
    paddingTop: 15,
    padding: 8,
    fontFamily: 'VCRMono',
    fontSize: '18px',
    color: PRIMARY,
  },
  head: {
    flex: 1,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 40,
    fontSize: 22,
  },
  headText: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  coinList: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'overlay',
    paddingRight: 20,
    paddingBottom: 5,
    maxHeight: '40vh',
  },
}))

function WalletScreen ({ account }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <img src={rupeeIcon} width={70} height={70}/>
        <div className={classes.headText}>
          <span style={{ fontFamily: 'Aero', opacity: 0.8 }}><span style={{ marginRight: 15 }}>LHC</span> LeroCoin</span>
          <span style={{ fontSize: '1.1em' }}>{account.user.coins.toString().padStart(6, '0')}</span>
        </div>
      </div>
      <div className={classes.coinList}>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
        <CryptoCoin name="BTC" amount={0}>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(WalletScreen)

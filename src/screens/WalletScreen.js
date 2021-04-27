import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { PRIMARY } from '../theme'
import ExternalCryptoCoin from '../components/ExternalCryptoCoin'

import rupeeIcon from '../assets/rupee_blue.svg'
import btcIcon from '../assets/coins/btc.png'
import ethIcon from '../assets/coins/eth.png'
import ltcIcon from '../assets/coins/ltc.png'
import rvnIcon from '../assets/coins/rvn.png'
import sushiIcon from '../assets/coins/sushi.png'
import usdtIcon from '../assets/coins/usdt.png'
import xmrIcon from '../assets/coins/xmr.png'
import xrpIcon from '../assets/coins/xrp.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90vh',
    flexGrow: 1,
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
    paddingTop: 15,
    padding: 8,
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
    backgroundColor: '#00e5ff2e',
    borderRadius: 10,
    padding: 10,
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
        <ExternalCryptoCoin coinId="btc-bitcoin" name="BTC" amount={0} src={btcIcon} />
        <ExternalCryptoCoin coinId="eth-ethereum" name="ETH" amount={0} src={ethIcon} />
        <ExternalCryptoCoin coinId="ltc-litecoin" name="LTC" amount={0} src={ltcIcon} />
        <ExternalCryptoCoin coinId="rvn-ravencoin" name="RVN" amount={0} src={rvnIcon} />
        <ExternalCryptoCoin coinId="sushi-sushi" name="SUSHI" amount={0} src={sushiIcon} />
        <ExternalCryptoCoin coinId="usdt-tether" name="USDT" amount={0} src={usdtIcon} />
        <ExternalCryptoCoin coinId="xmr-monero" name="XMR" amount={0} src={xmrIcon} />
        <ExternalCryptoCoin coinId="xrp-xrp" name="XRP" amount={0} src={xrpIcon} />
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

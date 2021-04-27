import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CryptoCoin from './CryptoCoin'

import coinApi from '../services/coinpapricka'

import rupeeIcon from '../assets/rupee_blue.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    marginBottom: 10,
  },
  center: {
    margin: '0 auto',
    justifySelf: 'center',
    textAlign: 'center',
    alignSelf: 'center',
  },
  right: {
    justifySelf: 'flex-end',
  },
}))

const getCurrencyData = async (coinId) => {
  if (sessionStorage.getItem(coinId) !== null) {
    return parseInt(sessionStorage.getItem(coinId))
  } else {
    const response = await coinApi.get('/price-converter?base_currency_id=' + coinId + '&quote_currency_id=usd-us-dollars&amount=100')
    sessionStorage.setItem(coinId, response.data.price)
    return response.data.price
  }
}


function ExternalCryptoCoin ({ src, name, coinId = 'btc-bitcoin', amount = 0 }) {
  const classes = useStyles()
  const [coinPrice, setData] = React.useState(0)
  useEffect(async () => { setData(await getCurrencyData(coinId)) }, [])

  return (
    <div className={classes.root}>
      <CryptoCoin name={name} amount={coinPrice ? coinPrice : 0} trending={coinPrice >= 25000 ? 'up' : 'down'}>
        <img src={src} width={38} height={38}/>
      </CryptoCoin>
      <div className={classes.center}><ArrowForwardIosIcon /></div>
      <div className={classes.right}>
        <CryptoCoin name="LRC" amount={100} reversed>
          <img src={rupeeIcon} width={38} height={38}/>
        </CryptoCoin>
      </div>
    </div>
  )
}

export default ExternalCryptoCoin;

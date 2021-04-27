// Import dependencies
import { setup } from 'axios-cache-adapter'

// Create `axios` instance with pre-configured `axios-cache-adapter` attached to it
const api = setup({
  // `axios` options
  baseURL: 'https://api.coinpaprika.com/v1',

  // `axios-cache-adapter` options
  cache: {
    maxAge: 15 * 60 * 1000
  }
})

export default api;
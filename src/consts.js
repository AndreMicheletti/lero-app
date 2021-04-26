
const PROD = false;

export const BACKEND_URL = PROD ? "https://polar-ridge-40128.herokuapp.com" : "http://localhost:4000"
export const WEBSOCKET_URL = PROD ? "wss://polar-ridge-40128.herokuapp.com/socket" : "ws://localhost:4000/socket"

import axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionTypes'

export const doLogin = (secretCode, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST})
  try {
    const loginResponse = await axios.post('http://localhost:4000/api/login', { 'secret_code': secretCode, 'password': password });
    const {success, token} = loginResponse.data;
    if (!success) throw Error("could not log in")

    const userResponse = await axios.get('http://localhost:4000/api/user', {
      headers: { 'Authorization': `Bearer ${token}`}
    });
    if (!userResponse.data.success) throw Error("could not fetch user data")

    dispatch({ type: LOGIN_SUCCESS, payload: { token, user: userResponse.data.user } })
  } catch (e) {
    console.warn(e)
    dispatch({ type: LOGIN_FAILURE })
  }
}

export const doLogout = () => { return {type: LOGOUT} }

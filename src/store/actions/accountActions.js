import axios from 'axios'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionTypes'
import { BACKEND_URL } from '../../consts'

export const doLogin = (secretCode, password, onSuccess, onError) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST})
  try {
    const loginResponse = await axios.post(BACKEND_URL + '/api/login', { 'secret_code': secretCode, 'password': password });
    const {success, token} = loginResponse.data;
    if (!success) throw loginResponse;

    const userResponse = await axios.get(BACKEND_URL + '/api/user', {
      headers: { 'Authorization': `Bearer ${token}`}
    });
    if (!userResponse.data.success) userResponse;

    dispatch({ type: LOGIN_SUCCESS, payload: { token, user: userResponse.data.user } })
    onSuccess(userResponse.data.user)
  } catch (e) {
    console.warn(e)
    dispatch({ type: LOGIN_FAILURE })
    onError()
  }
}

export const doAutoLogin = (token, onSuccess, onError) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST})
  try {
    const userResponse = await axios.get(BACKEND_URL + '/api/user', {
      headers: { 'Authorization': `Bearer ${token}`}
    });
    if (!userResponse.data.success) throw Error("could not fetch user data")

    dispatch({ type: LOGIN_SUCCESS, payload: { token, user: userResponse.data.user } })
    onSuccess(userResponse.data.user)
  } catch (e) {
    console.warn(e)
    dispatch({ type: LOGIN_FAILURE })
    onError()
  }
}

export const doLogout = () => { return {type: LOGOUT} }

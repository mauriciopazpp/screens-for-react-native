//import { api, removeToken, storeToken } from '@api/'
//import { stringify } from "qs"
import {
    loadingLogin as loading,
    loginSuccessful
} from './dispatchers'

export const loginRedux = (email, password) => {
  return (dispatch) => {
      //dispatch(loading())
      //api.post('api/login', stringify({
      //    email: email,
      //    password: password
      //}))
      //.then(({ data }) => {
      //    storeToken(data.access_token)
      //    dispatch(loginSuccessful(data))
      //})
      //.catch((err) => {
      //    removeToken()
      //    dispatch(loginUnsuccessful(err))
      //})
  }
}

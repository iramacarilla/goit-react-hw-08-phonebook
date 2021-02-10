import { createReducer } from '@reduxjs/toolkit';
import {combineReducers} from 'redux'
import authAction from './authAction'


/*const initialUserState = { email: '',idToken: "",
refreshToken: "",
isAuth: false};*/

const email = createReducer (null, {
[authAction.registerSuccess]: (_, {payload}) => payload.email,
[authAction.loginSuccess]: (_, {payload}) => payload.email,
[authAction.logoutSuccess]: () => null
})

const token = createReducer (null, {
[authAction.registerSuccess]: (_, {payload}) => payload.idToken,
[authAction.loginSuccess]: (_, {payload}) => payload.idToken,
[authAction.logoutSuccess]: () => null

})
export default combineReducers ({
    email,
    token,
  
})

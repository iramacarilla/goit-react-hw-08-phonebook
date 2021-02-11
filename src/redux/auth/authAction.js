import {createAction} from '@reduxjs/toolkit'

const registerRequest = createAction('auth/registerRequest')
const registerSuccess = createAction('auth/registerSuccess')
const registerFailure = createAction('auth/registerFailure')

const loginRequest = createAction('auth/loginRequest')
const loginSuccess = createAction('auth/loginSuccess')
const loginFailure = createAction('auth/loginFailure')


const logoutSuccess = createAction('auth/logoutSuccess')
const logoutFailure = createAction('auth/logoutFailure')



export default {
registerRequest,
registerSuccess,
registerFailure,
loginRequest,
loginSuccess,
loginFailure,
logoutSuccess,
logoutFailure,

}
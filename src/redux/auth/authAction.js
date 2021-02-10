import {createAction} from '@reduxjs/toolkit'

const registerRequest = createAction('auth/registerRequest')
const registerSuccess = createAction('auth/registerSuccess')
const registerFailure = createAction('auth/registerFailure')

const loginRequest = createAction('auth/loginRequest')
const loginSuccess = createAction('auth/loginSuccess')
const loginFailure = createAction('auth/loginFailure')

/*const logoutRequest = createAction('auth/logoutRequest')*/
const logoutSuccess = createAction('auth/logoutSuccess')
/*const logoutFailure = createAction('auth/logoutFailure')*/

const getCurrentRequest = createAction('auth/getCurrentRequest')
const getCurrentSuccess = createAction('auth/getCurrentSuccess')
const getCurrentFailure = createAction('auth/getCurrentFailure')

export default {
registerRequest,
registerSuccess,
registerFailure,
loginRequest,
loginSuccess,
loginFailure,
logoutSuccess,
/*logoutRequest,
logoutSuccess,
logoutFailure,*/
getCurrentRequest,
getCurrentSuccess,
getCurrentFailure
}
import { createReducer } from '@reduxjs/toolkit';
import {combineReducers} from 'redux'
import authAction from './authAction'



const initialUserState = { email: '', localId: ""};

const user = createReducer (initialUserState, {
[authAction.registerSuccess]: (state, {payload}) =>  ({ ...state,
    email: payload.email,
    localId: payload.localId,
}),
[authAction.loginSuccess]: (state, {payload}) =>  ({ ...state,
    email: payload.email,
    localId: payload.localId,
}),
[authAction.logoutSuccess]: (_, {payload}) => ({...initialUserState})
})

const token = createReducer ('', {
[authAction.registerSuccess]: (_, {payload}) => payload.idToken,  
[authAction.loginSuccess]: (_, {payload}) => payload.idToken,
[authAction.logoutSuccess]: (_, {payload}) => {return ''}

})
const refreshToken = createReducer ('', {
    [authAction.registerSuccess]: (_, {payload}) => payload.refreshToken,  
    [authAction.loginSuccess]: (_, {payload}) => payload.refreshToken,
    [authAction.logoutSuccess]: (_, {payload}) => {return ''}
    
    })

const error = createReducer(null, {
    [authAction.registerFailure]: (_, { payload }) => payload,
    [authAction.loginFailure]: (_, { payload }) => payload,
    [authAction.logoutFailure]: (_, { payload }) => payload,
    
  });
export default combineReducers ({
    user,
    token,
    refreshToken,
    error
  
})

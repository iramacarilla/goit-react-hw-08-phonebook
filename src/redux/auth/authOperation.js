import axios from "axios";
import authAction from "./authAction";

const registerOperation = (user) => async (dispatch) => {
  dispatch(authAction.registerRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(authAction.registerSuccess(response.data));
  } catch (error) {
    dispatch(authAction.registerFailure(error.response.data.error.message));
  } finally {
    dispatch(authAction.registerRequest());
  }
};

const loginOperation = (user) => async (dispatch) => {
  dispatch(authAction.loginRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(authAction.loginSuccess(response.data));
  } catch (error) {
    dispatch(authAction.loginFailure(error.response.data.error.message));
  } finally {
    dispatch(authAction.loginRequest());
  }
};

const refreshRequest = (getState) => {
  const refreshToken = getState().auth.refreshToken;
  console.log("refreshToken", refreshToken);
  axios.post(process.env.REACT_APP_REFRESH_URL, {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
};

/*const registerOperation = userData => dispatch => {
    dispatch( authAction.registerRequest())
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiYLzF9CroFfRhDHtRDSHha9EOgP30EsQ', {
        ...userData,
        returnSecureToken: true,
      })
    //axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaPlTxi4vFqbMfrGB5GFu6nZNM4cp3tGg', userData)
    .then((response )=> dispatch( authAction.registerSuccess(response.data))
)
    .catch(error => dispatch( authAction.registerFailure(error)))
}

const loginOperation = userData => dispatch => {
    dispatch( authAction.loginRequest())
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDiYLzF9CroFfRhDHtRDSHha9EOgP30EsQ', {
        ...userData,
        returnSecureToken: true,
      })
    //axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaPlTxi4vFqbMfrGB5GFu6nZNM4cp3tGg', userData)
    .then((response )=> dispatch( authAction.loginSuccess(response.data))
)
    .catch(error => dispatch( authAction.loginFailure(error)))
}*/

export default { registerOperation, loginOperation, refreshRequest };

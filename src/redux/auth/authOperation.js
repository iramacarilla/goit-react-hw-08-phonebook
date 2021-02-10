import axios from 'axios'
import authAction from './authAction'


/*const registerOperation = (user) => async (dispatch) => {
    dispatch(authAction.registerRequest());
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaPlTxi4vFqbMfrGB5GFu6nZNM4cp3tGg',{...user}
      );
      console.log(response);
      /*dispatch( authAction.registerSuccess(response.data));*/
    /*} catch (error) {
      dispatch(authAction.registerFailure(error));
    } 
  };*/
  const key = 'AIzaSyDiYLzF9CroFfRhDHtRDSHha9EOgP30EsQ'
const registerOperation = userData => dispatch => {
    dispatch( authAction.registerRequest())
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiYLzF9CroFfRhDHtRDSHha9EOgP30EsQ', userData)
    //axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaPlTxi4vFqbMfrGB5GFu6nZNM4cp3tGg', userData)
    .then((response )=> dispatch( authAction.registerSuccess(response.data))
)
    .catch(error => dispatch( authAction.registerFailure(error)))
}

const loginOperation = userData => dispatch => {
    dispatch( authAction.loginRequest())
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDiYLzF9CroFfRhDHtRDSHha9EOgP30EsQ', userData)
    //axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaPlTxi4vFqbMfrGB5GFu6nZNM4cp3tGg', userData)
    .then((response )=> dispatch( authAction.loginSuccess(response.data))
)
    .catch(error => dispatch( authAction.loginFailure(error)))
}

/*const logoutOperation = () => dispatch => {
    dispatch( authAction.logoutRequest())
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaPlTxi4vFqbMfrGB5GFu6nZNM4cp3tGg')
    //axios.post(`${process.env.REACT_APP_BASE_URL}/contacts.json`, contact)
    .then(( )=> dispatch( authAction.logoutSuccess())
)
    .catch(error => dispatch( authAction.logoutFailure(error)))
}*/

export default {registerOperation, loginOperation}
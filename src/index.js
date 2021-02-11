import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import {store, persistor} from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react'


ReactDOM.render(
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
<BrowserRouter>
<App />
</BrowserRouter>
</PersistGate>
</Provider>,
  
  document.getElementById('root')
);

/*REACT_APP_BASE_URL= https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com
REACT_APP_SIGNUP_URL= https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiYLzF9CroFfRhDHtRDSHha9EOgP30EsQ
REACT_APP_SIGNIN_URL= https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDiYLzF9CroFfRhDHtRDSHha9EOgP30EsQ*/
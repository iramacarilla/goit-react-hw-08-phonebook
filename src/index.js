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


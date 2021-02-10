import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactsReducer from './contacts/contactsReducer'
import authReducer from './auth/authReducer'

const defaultMiddleware = getDefaultMiddleware();
const authPersistConfig = {
  key:'auth',
  storage,
  whitelist: ['token', 'user']
}
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer)
  },
 /* middleware: [...defaultMiddleware]*/
});

export const persistor = persistStore(store);




/*import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import contactsReducer from './contacts/contactsReducer'



const rootReducer = combineReducers({
    contacts: contactsReducer,
})
const store = createStore(rootReducer, composeWithDevTools())

export default store;

/* const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [isVisible, setIsVisible] = useState(false);*/
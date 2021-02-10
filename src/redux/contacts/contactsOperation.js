import axios from 'axios'
import {addContactRequest, addContactFailure, addContactSuccess, getAllContactsRequest, 
    getAllContactsSuccess, getAllContactsFailure, deleteContactSuccess, deleteContactFailure, 
deleteContactRequest, toggleComplitedContactRequest, toggleComplitedContactSuccess, toggleComplitedContactFailure} from './contactsAction'


const addContactOperation = contact => (dispatch, getState)=> {
    const idToken = getState().auth.token
    const localId = getState().auth.user.localId
    console.log(localId);
    console.log(idToken);
    dispatch(addContactRequest()) 
    axios.post(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts/${localId}.json?auth=${idToken}`, contact)
   /* axios.post(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts.json?auth=${idToken}`, contact)*/
    //axios.post(`${process.env.REACT_APP_BASE_URL}/contacts.json`, contact)
    .then((response )=> dispatch(addContactSuccess({...contact, id:response.data.name}))
)
    .catch(error => dispatch(addContactFailure(error)))
}
const getAllContactsOperation = () => (dispatch, getState) => {
    const idToken = getState().auth.token
    const localId = getState().auth.user.localId
    console.log(localId);
    console.log(idToken);
    dispatch(getAllContactsRequest())
    //axios.get('https://phonebook-8-default-rtdb.firebaseio.com/contacts.json')
    localId && axios.get(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts/${localId}.json?auth=${idToken}`)
    .then((response)=> { 
        /*const data = response.data ? Object.keys(response.data).map(key=>({...response.data[key], id: key })) : []
         dispatch(getAllContactsSuccess(data)) */
     
    }
    )
    .catch(error => dispatch(getAllContactsFailure(error)))
}
const deleteContactOperation = (id) => (dispatch, getState) => {
    const idToken = getState().auth.token
    dispatch(deleteContactRequest())
    //axios.delete(`https://phonebook-8-default-rtdb.firebaseio.com/contacts/${id}.json`)
    axios.delete(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts/${id}.json`)
    .then(()=> dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactFailure(error)))
}


export {addContactOperation, getAllContactsOperation, deleteContactOperation}
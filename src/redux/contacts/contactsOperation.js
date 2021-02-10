import axios from 'axios'
import {addContactRequest, addContactFailure, addContactSuccess, getAllContactsRequest, 
    getAllContactsSuccess, getAllContactsFailure, deleteContactSuccess, deleteContactFailure, deleteContactRequest, toggleComplitedContactRequest, toggleComplitedContactSuccess, toggleComplitedContactFailure } from './contactsAction'


const addContactOperation = contact => (dispatch, getState)=> {
    const idToken = getState().auth.token
    dispatch(addContactRequest()) 
    //axios.post('https://phonebook-8-default-rtdb.firebaseio.com/contacts.json', contact)
    axios.post(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts.json?auth=${idToken}`, contact)
    //axios.post(`${process.env.REACT_APP_BASE_URL}/contacts.json`, contact)
    .then((response )=> dispatch(addContactSuccess({...contact, id:response.data.name}))
)
    .catch(error => dispatch(addContactFailure(error.slack)))
}
const getAllContactsOperation = () => (dispatch, getState) => {
    /*const idToken = getState().auth.token*/
    dispatch(getAllContactsRequest())
    //axios.get('https://phonebook-8-default-rtdb.firebaseio.com/contacts.json')
    axios.get(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts.json`)
    .then((response)=> 
    dispatch(getAllContactsSuccess(Object.keys(response.data).map(key=>({...response.data[key], id: key })))))
    .catch(error => dispatch(getAllContactsFailure(error)))
}
const deleteContactOperation = (id) => (dispatch, getState) => {
    const idToken = getState().auth.token
    dispatch(deleteContactRequest())
    //axios.delete(`https://phonebook-8-default-rtdb.firebaseio.com/contacts/${id}.json`)
    axios.delete(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts/${id}.json?auth=${idToken}`)
    .then(()=> dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactFailure(error)))
}


export {addContactOperation, getAllContactsOperation, deleteContactOperation}
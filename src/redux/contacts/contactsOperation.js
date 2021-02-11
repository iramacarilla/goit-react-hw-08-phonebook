import axios from 'axios'
import {addContactRequest, addContactFailure, addContactSuccess, getAllContactsRequest, 
    getAllContactsSuccess, getAllContactsFailure, deleteContactSuccess, deleteContactFailure, 
deleteContactRequest} from './contactsAction'


const addContactOperation = contact => (dispatch, getState)=> {
    const idToken = getState().auth.token
    const localId = getState().auth.user.localId
    //const localId = getState().auth.localId
   
    dispatch(addContactRequest()) 
    //axios.post(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contact/${localId}.json?auth=${idToken}`, contact)
   //axios.post('https://phonebook-8-default-rtdb.firebaseio.com/contacts.json', contact)
    axios.post(`${process.env.REACT_APP_BASE_URL}/contacts/${localId}.json?auth=${idToken}`, contact)
    .then((response )=> dispatch(addContactSuccess({...contact, id:response.data.name}))
)
    .catch(error => dispatch(addContactFailure(error)))
}
const getAllContactsOperation = () => (dispatch, getState) => {
    const idToken = getState().auth.token
   // const localId = getState().auth.localId
    const localId = getState().auth.user.localId
    
    dispatch(getAllContactsRequest())
    //axios.get('https://phonebook-8-default-rtdb.firebaseio.com/contacts.json')
    //axios.get(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contact/${localId}.json?auth=${idToken}`)
    axios.get(`${process.env.REACT_APP_BASE_URL}/contacts/${localId}.json?auth=${idToken}`)
    .then((response)=> { 
        const data = response.data ? Object.keys(response.data).map(key=>({...response.data[key], id: key })) : []
         dispatch(getAllContactsSuccess(data)) 
     
    }
    )
    /*.then((response)=> 
    {if (response.data) { dispatch(getAllContactsSuccess(Object.keys(response.data).map(key=>({...response.data[key], id: key }))))} else {[]}} )*/
    .catch(error => dispatch(getAllContactsFailure(error)))
}
const deleteContactOperation = (id) => (dispatch, getState) => {
    const idToken = getState().auth.token
   // const localId = getState().auth.localId
    const localId = getState().auth.user.localId
    dispatch(deleteContactRequest())
    axios.delete(`https://phonebook-8-default-rtdb.firebaseio.com/contacts/${localId}/${id}.json?auth=${idToken}`)
   //axios.delete(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contact/${id}.json`)
    .then(()=> dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactFailure(error)))
}


export {addContactOperation, getAllContactsOperation, deleteContactOperation}
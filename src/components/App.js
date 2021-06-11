import React, { Suspense, useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
import { mainRoutes } from "../routes/mainRoutes";
import AppBar from "./appBar/AppBar";
import Layout from "./layOut/LayOut";
import PublicRoutes from "./routes/PublicRoutes";
import PrivatRoutes from "./routes/PrivatRoutes";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../redux/auth/authAction";

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.contacts.error);
  let token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (error === "Auth token is expired") {
      //console.log("token", token);
      dispatch(authAction.logoutSuccess());
      //token = null;
      //history.push("/");
    }
  }, [error]);
  return (
    <>
      <Layout>
        <Suspense fallback={<h2>...loading</h2>}>
          <Switch>
            {mainRoutes.map((route) =>
              route.isPrivate ? (
                <PrivatRoutes {...route} key={route.path} />
              ) : (
                <PublicRoutes {...route} key={route.path} />
              )
            )}
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

/*const mapStateToProps = state => ({
  isAuth: authSelectores.isAuth(state),
  })
 
  
  export default connect(mapStateToProps)(Navigation)*/

export default App;

///////////////////////////////////////////////////

/*import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
import ContactList from './contactList/ContactList'
import Filter from './filter/Filter'
import ContactEditor from './contactEditor/ContactEditor'

export default class App extends Component {
  state = {
    contacts: [],
    filter:'', 
  }
  
  componentDidMount() {
    if (localStorage.getItem('contacts')) 
    {this.setState({contacts: JSON.parse(localStorage.getItem('contacts'))})}
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))}
    }
    

  setFilter = (e) => {
    this.setState({filter: e.target.value})
  }
  filterContact =() => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
  
 
  addContact = (name, number) => {
    const searchName = this.state.contacts.map((contact) => contact.name).includes(name)
    if(searchName) {alert(`${name} is already in contacts`)} 
    else {
    const contact = {
      id: uuidv4(),
      name,
      number
    }
    this.setState(prevState => {
      return{ contacts: [...prevState.contacts, contact]}})
    }
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact=> contact.id !== id) 
      }})
  }
  render() {
    const filtredContact = this.filterContact();
    return (
      <>
      <ContactEditor onAddForm={this.addContact}/>
      {this.state.contacts.length && <Filter value={this.state.filter} onChange={this.setFilter}/>}
     {this.state.contacts.length && <ContactList contacts= {filtredContact} onDelete={this.deleteContact}/> }
      
      </>
    )
}
}
*/

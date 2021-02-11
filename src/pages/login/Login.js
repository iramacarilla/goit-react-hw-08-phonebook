import React, { Component } from 'react'
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/authOperation'
import styles from './Login.module.css'
import authSelectores from '../../redux/auth/authSelectores'
import Notification from '../../components/notification/Notification';
//import authAction from '../../redux/auth/authAction';


export class Login extends Component {
    state = {email: '',
    password: ''}

    onHandelChange = (event) => {
        const {name, value} = event.target;
        this.setState( {[name]:value})
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        if (this.props.location.pathname==='/login')
        {this.props.onLogIn(this.state)}
      else this.props.onRegister(this.state)
        this.setState({email: '',
        password: ''})
    }
    
    render() {
        return (
            <>
           <Notification isVisible={this.props.error }  message = {this.props.error} /> 
            <div className={styles.singFragment} >
                <form className={styles.singForm} onSubmit={this.onHandleSubmit}>
              <p> Name </p>
               <input className={styles.singInput} type='email' placeholder = 'Enter your email'  name='email' value={this.state.email}  onChange={this.onHandelChange}/>
               <p> Password </p>
               <input className={styles.singInput} type='text' name='password' placeholder = 'Enter your password' value={this.state.password}  onChange={this.onHandelChange}/> 
              
               <button type='submit'>{this.props.location.pathname==='/login' ? 'Log in' : 'Sign up'}</button> 
               </form>
            </div>
            </>
        )
    }
}
const  mapDispatchToProps = {
    onRegister: authOperation.registerOperation,
    onLogIn: authOperation.loginOperation,
    
}
const mapStateToProps= state => ({
    email: authSelectores.getUserName(state) ,
    error: state.auth.error
})
    
export default connect(mapStateToProps, mapDispatchToProps)(Login)



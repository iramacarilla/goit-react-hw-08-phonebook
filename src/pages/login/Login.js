import React, { Component } from 'react'
import { connect } from 'react-redux';
import authOperation from '../../redux/auth/authOperation'


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
            <div>
                <form onSubmit={this.onHandleSubmit}>
                <label > Email
               <input type='email' placeholder = 'Enter your email'  name='email' value={this.state.email}  onChange={this.onHandelChange}/>
               </label>
               <label > Password
               <input type='text' name='password' placeholder = 'Enter your password' value={this.state.password}  onChange={this.onHandelChange}/> 
               </label>
               <button type='submit'>{this.props.location.pathname==='/login' ? 'Log in' : 'Sing up'}</button> 
               </form>
            </div>
        )
    }
}
const mapDispatchToProps = {
    onRegister: authOperation.registerOperation,
    onLogIn: authOperation.loginOperation,
}
    
export default connect(null, mapDispatchToProps)(Login)

import React, { Component, useState } from "react";
import { connect } from "react-redux";
import authOperation from "../../redux/auth/authOperation";
import styles from "./Login.module.css";
import authSelectores from "../../redux/auth/authSelectores";
import Notification from "../../components/notification/Notification";
//import authAction from '../../redux/auth/authAction';

export class Login extends Component {
  state = { email: "", password: "" };
  state = { isVisible: true };

  onHandelChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (event) => {
    event.preventDefault();
    if (this.props.location.pathname === "/login") {
      this.props.onLogIn(this.state);
    } else this.props.onRegister(this.state);
    this.setState({ email: "", password: "" });
  };
  //onClose=()=> this.setState({isVisible:false})

  render() {
    return (
      <>
        {this.props.error && (
          <Notification
            isVisible={this.state.isVisible}
            onClose={() => this.setState({ isVisible: false })}
            message={this.props.error}
          />
        )}
        <div className={styles.singFragment}>
          <form className={styles.singForm} onSubmit={this.onHandleSubmit}>
            <p> Email </p>
            <input
              className={styles.singInput}
              type="email"
              placeholder="Enter your email"
              name="email"
              value={this.state.email || ""}
              onChange={this.onHandelChange}
            />
            <p> Password </p>
            <input
              className={styles.singInput}
              type="text"
              name="password"
              placeholder="Enter your password"
              value={this.state.password || ""}
              onChange={this.onHandelChange}
            />

            <button className={styles.signBtn} type="submit">
              {this.props.location.pathname === "/login" ? "Log in" : "Sign up"}
            </button>
          </form>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = {
  onRegister: authOperation.registerOperation,
  onLogIn: authOperation.loginOperation,
};
const mapStateToProps = (state) => ({
  email: authSelectores.getUserName(state),
  error: state.auth.error,
  isAuth: authSelectores.isAuth(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

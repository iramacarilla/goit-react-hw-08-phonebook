import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectores from "../../redux/auth/authSelectores";

const PublicRoute = ({ path, exact, component, restricted, isAuth }) => {
  return isAuth && restricted ? (
    <Redirect to='/phonebook' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};
const mapStateToProps = state => ({
    isAuth: authSelectores.isAuth(state),
    })
   
    
    export default connect(mapStateToProps)(PublicRoute)


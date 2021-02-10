import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectores from "../../redux/auth/authSelectores";

const PrivateRoute = ({ path, exact, component, isAuth }) => {
  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to='/login' />
  );
};
const mapStateToProps = state => ({
    isAuth: authSelectores.isAuth(state),
    })
   
    
    export default connect(mapStateToProps)(PrivateRoute)


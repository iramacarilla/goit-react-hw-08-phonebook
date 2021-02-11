import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import  {mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItem";
import authSelectores from '../../redux/auth/authSelectores'
import { connect } from "react-redux";
import PrivateRoute from "../routes/PrivatRoutes";
import PublicRoute from '../routes/PublicRoutes'
import styles from './Navigation.module.css'

const Navigation = () => {
 

  return (
    <>
      <ul className={styles.navMenu} >
        {mainRoutes.map((route) => (
          <NavigationItem {...route}  key={route.path} />
        ))}
      </ul>
      
    </>
  );
};

export default Navigation
/*const mapStateToProps = state => ({
  isAuth: authSelectores.isAuth(state),
  })
 
  
  export default connect(mapStateToProps)(Navigation)*/

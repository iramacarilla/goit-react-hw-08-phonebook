import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectores from '../../redux/auth/authSelectores'
import styles from './Navigation.module.css'

const NavigationItem = ({ isAuth, path, name, exact, isPrivate, restricted }) => {

    return (
      
    <>
      {!isPrivate && !restricted && (
        <li className={styles.listItem} key={path}>
          <NavLink
            to={path}
            exact={exact}
            className={styles.link}
            activeClassName={styles.activeLink}>
            {name}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !restricted && (
        <li className={styles.listItem} key={path}>
          <NavLink
            to={path}
            exact={exact}
            className={styles.link}
            activeClassName={styles.activeLink}>
            {name}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && restricted && (
        <li className={styles.listItem} key={path}>
          <NavLink
            to={path}
            exact={exact}
            className={styles.link}
            activeClassName={styles.activeLink}>
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};
const mapStateToProps = state => ({
    isAuth: authSelectores.isAuth(state)
  })
   
    
    export default connect(mapStateToProps)(NavigationItem)

import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectores from '../../redux/auth/authSelectores'

const NavigationItem = ({ isAuth, path, name, exact, isPrivate, restricted }) => {
    console.log(isAuth);
    return (
      
    <>
      {!isPrivate && !restricted && (
        <li className='listItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !restricted && (
        <li className='listItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
            {name}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && restricted && (
        <li className='listItem' key={path}>
          <NavLink
            to={path}
            exact={exact}
            className='link'
            activeClassName='activeLink'>
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

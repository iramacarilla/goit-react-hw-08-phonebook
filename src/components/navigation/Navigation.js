import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import  {mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItem";
import authSelectores from '../../redux/auth/authSelectores'
import { connect } from "react-redux";

const Navigation = ({isAuth}) => {
 

  return (
    <>
      <ul >
        {mainRoutes.map((route) => (
          <NavigationItem {...route} isAuth={isAuth} key={route.path} />
        ))}
      </ul>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};
const mapStateToProps = state => ({
  isAuth: authSelectores.isAuth(state),
  })
 
  
  export default connect(mapStateToProps)(Navigation)

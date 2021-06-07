/*const ADD_CONTACT = 'contacts/add';
const DELETE_CONTACT = 'contacts/delete';
const FILTER_CONTACTS = 'contacts/filter';
const SET_ALERT = 'contacts/alert';

export default  {
    ADD_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    SET_ALERT
}*/




-import React from 'react';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import mainRoutes from '../routes/routes';
import AppBar from './appBar/AppBar';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = () => {
    return (
        <div>
        <>
            <AppBar/>
            
            <h2>HEALTH</h2>
            <h2>SlimMom</h2>
        </div>
        </>
    );
};

export default App;


/* <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
             <Route path={path} exact={exact} key={path} component={component} />))}
        </Switch>
      </Suspense>*/
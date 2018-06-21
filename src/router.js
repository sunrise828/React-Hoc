import React from "react"
import { Route, Switch } from 'react-router-dom';

import Signin from './components/Layouts/signin';
import Homepage from './components/Layouts/homepage';

const PublicRoutes = () => {
    return (
        
        <Switch>        
            <Route
            exact
            path={"/"}
            component={Signin}
            />
            <Route
            exact
            path={"/signin"}
            component={Signin}
            />
            <Route
            exact
            path={"/dashboard"}
            component={Homepage}
            />            
        </Switch>     
        
    )
}

export default PublicRoutes
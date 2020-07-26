import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import welcome from './welcome';
import welcomenew from './welcomenew';
import Count from './count';
import DashBoard from './dashboard';


const AppRoute = () =>
{
    return(

        <Router>
        <Switch>
        <Route exact path='/' component={welcome}></Route>
        <Route exact path='/welcomenew' component={welcomenew}></Route>
        <Route exact path='/count' component={Count}></Route>
        <Route exact path='/dashboard' component={DashBoard}></Route>
        </Switch>
        </Router>
    )
}

export default AppRoute;
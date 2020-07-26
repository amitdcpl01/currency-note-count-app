import React from 'react';
import { Route, HashRouter, NavLink } from 'react-router-dom';
import Count from './count';
import DashBoard from './dashboard';

// function welcome(){
//     return <h1>welcome</h1>; 
// }

const welcome = () => {
    return (
        <div>
            <h1> WelcomePage</h1>
            <HashRouter>
                <div>
                    <NavLink to='/count'> Count</NavLink>
                    <NavLink to='/dashboard'> Dashboard</NavLink>
                </div>
                <div>
                    <Route exact path='/count' component={Count}></Route>
                    <Route exact path='/dashboard' component={DashBoard}></Route>
                </div>
            </HashRouter>
        </div>

    );
};

export default welcome;
import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import DashBoard from './dashboard';
import Count from './count';
import CountNew from './countnew';

const welcomenew = () => {

    return (
        <HashRouter>
            <div>
                <NavLink to='/dashboard'>DashBoard</NavLink><br></br>
                <NavLink to='/count'>Count-old</NavLink><br></br>
                <NavLink to='/countnew'>Count-New</NavLink>
            </div>
            <div>

                <Route exact path='/dashboard' component={DashBoard}></Route>
                <Route exact path='/count' component={Count}></Route>
                <Route exact path='/countnew' component={CountNew}></Route>

            </div>
        </HashRouter>

    )
};

export default welcomenew;
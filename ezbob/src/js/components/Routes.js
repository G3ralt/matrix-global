import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dot from './Dot';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dot} />
            {/* <Route exact path="/react-task" component={ClientView} /> */}
        </Switch>
    );
};

export default Routes;
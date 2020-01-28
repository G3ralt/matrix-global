import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dot from './ui/Dot';
import { ReactTask } from './containers';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dot} />
            <Route exact path="/react-task" component={ReactTask} />
        </Switch>
    );
};

export default Routes;
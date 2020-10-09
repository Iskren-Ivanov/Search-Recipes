import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Recipes from '../Form/Recipes/Recipes';
import Recipe from '../Form/Recipe/Recipe';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Recipes} />
            <Route path="/recipe" component={Recipe} />
            <Redirect to="/" />
        </Switch>
    )
};

export default Router;
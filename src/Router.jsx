import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DonatePage from "./DonatePage";
import LandingPage from "./LandingPage";
const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/donate' component={DonatePage}/>
        </Switch>
    );
}

export default Router;
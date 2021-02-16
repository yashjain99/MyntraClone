import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage } from '../Pages/Home/Components/HomePage';

export function Routes() {
    return (
        <div>
            <Route exact path = "/" render = {(props) => <HomePage {...props} />} />
            
            <Switch>
                
            </Switch>
        </div>
    )
}

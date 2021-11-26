import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Library from './pages/Library';

export default function Routes() {
    return (
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Library} />
            </Switch>
       </BrowserRouter>
    );
}
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Artist from './Artist';
import Forms from './formComponent';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}></Route>
                <Route path="/details/:id" component={Artist}></Route>
                <Route path="/forms" component={Forms}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
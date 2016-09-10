import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';


// load foundation
$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
    //<Router history={hashHistory}>
    //    <Route path="/" component={Main}>
    //        <IndexRoute   component={Timer}></IndexRoute>
    //        <Route path="countdown" component={Countdown}></Route>
    //    </Route>
    //</Router>,
    <p>Boilerplate 3 Project</p>,
    document.getElementById('app')
);

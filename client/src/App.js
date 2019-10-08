import React from 'react';
import './App.css';
import promiseFinally from 'promise.prototype.finally';
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import {Provider} from "mobx-react";
import LoginPage from "./scene/LoginPage/LoginPage";
import HomePage from "./scene/HomePage/HomePage";
import {PrivateRoute} from "./components/AppRoute/PrivateRoute";
import AdminPage from "./scene/AdminPage/AdminPage";
import AuthStore from './stores/AuthStore';
import BaseStore from './stores/BaseStore';

const stores = {
    AuthStore,
    BaseStore
};

// For easier debugging
window._____APP_STATE_____ = stores;
promiseFinally.shim();


function App() {
    const history = createBrowserHistory();
    return (
        <Provider {...stores}>
            <Router history={history}>
                <Switch>
                    <Route path='/login' exact={true} component={LoginPage}/>
                    <Route path='/' exact={true} component={HomePage}/>
                    <PrivateRoute path='/admin' exact={true} component={AdminPage}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;

import React from 'react';
import './App.css';
import promiseFinally from 'promise.prototype.finally';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "mobx-react";
import LoginPage from "./scene/LoginPage/LoginPage";
import HomePage from "./scene/HomePage/HomePage";
import {PrivateRoute} from "./components/AppRoute/PrivateRoute";
import AdminPage from "./scene/AdminPage/AdminPage";
import AuthStore from './stores/AuthStore';
import BaseStore from './stores/BaseStore';
import NotFound404Page from "./scene/NotFound404Page/NotFound404Page";

const stores = {
    AuthStore,
    BaseStore
};

// For easier debugging
window._____APP_STATE_____ = stores;
promiseFinally.shim();


function App() {
    return (
        <Provider {...stores}>
            <HashRouter>
                <Switch>
                    <Route path='/login' exact={true} component={LoginPage}/>
                    <Route path='/' exact={true} component={HomePage}/>
                    <PrivateRoute path='/admin' exact={true} component={AdminPage}/>
                    <Route component={NotFound404Page}/>
                </Switch>
            </HashRouter>
        </Provider>
    );
}

export default App;

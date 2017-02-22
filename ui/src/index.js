import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

///imports to createStore

import MasterPage from "./pages/MasterPage"
import IndexPage from './pages/IndexPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'

import { Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from './store'
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';

const root = document.getElementById('root');


const history = syncHistoryWithStore(browserHistory, store);

ReactStormpath.init({
    dispatcher: {
        type: 'redux',
        store: store
    },
    endpoints: {
        baseUri: 'https://metal-raptor.apps.stormpath.io',
        // me: '/me',
        login: '/login',
        register: '/register',
        // verifyEmail: '/verify',
        // forgotPassword: '/forgot',
        // changePassword: '/change',
        logout: '/logout'
    }
});

ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={MasterPage}>
            <IndexRoute component={IndexPage}/>
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegistrationPage} />
        </Route>
    </Router>
</Provider>, root);

////HOW TO GET ACCESS TOKEN.
// ReactStormpath.getAccessToken()
//     .then((accessToken) => {
//         fetch('http://localhost:3000/api/subscription', {
//             method: 'get',
//             headers: {
//                 'Authorization': 'Bearer ' + accessToken
//             }
//         });
//     }).catch(() => {
//     // Could not get access token, user is not logged in
// });
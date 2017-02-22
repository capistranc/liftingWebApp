import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"



import MasterPage from "./pages/MasterPage"
import IndexPage from './pages/IndexPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import App from './pages/App';

import { Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from './store'
import ReactStormpath, { Router, AuthenticatedRoute, LoginLink, LoginRoute, HomeRoute } from 'react-stormpath';

const root = document.getElementById('root');
const stormApi = 'genuine-hound.apps.stormpath.io';

const history = syncHistoryWithStore(browserHistory, store);

ReactStormpath.init({
    dispatcher: {
        type: 'redux',
        store: store
    },
    endpoints: {
        baseUri: stormApi,
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
            <LoginRoute path='/login' component={LoginPage} />
            <Route path='/register' component={RegistrationPage} redirectTo='/App' />

            <AuthenticatedRoute>
                <HomeRoute path='/' component={MasterPage} />
                <Route path='/App' component={App} />
            </AuthenticatedRoute>
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
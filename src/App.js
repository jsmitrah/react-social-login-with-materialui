import React from 'react';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import './App.css';
import SignIn from './components/SignIn';
import signUp from './components/SignUp';
import ForgotPwd from './components/ForgotPwd';
import VerifiedUser from './components/VerifiedUser';
import SidebarRoute from './components/SidebarRoute';
import muiTheme from './muiTheme';
const reducers = combineReducers({ form: formReducer });
const store = createStore(reducers);
export const history = createBrowserHistory({ forceRefresh: true});
const theme = muiTheme;

function App() {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <MuiThemeProvider theme={theme}>
                <Router history={history}>
                    <Provider store={store}>
                        <Route exact path="/" component={SignIn} />
                        <Route exact path="/linkedin" component={LinkedInPopUp} />
                        <Route exact path="/signUp" component={signUp} />
                        <Route exact path="/forgotpwd" component={ForgotPwd} />
                        <Route exact path="/verified-user" component={VerifiedUser} />
                        <Route exact path="/home" component={SidebarRoute} />
                    </Provider>
                </Router>
            </MuiThemeProvider>
        </MuiPickersUtilsProvider>
    );
}

export default App;

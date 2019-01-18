import App from './src/views/App';
import ReactDom from 'react-dom';
import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const About = () => <h2>页面一</h2>;
const Users = () => <h2>页面二</h2>;

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));
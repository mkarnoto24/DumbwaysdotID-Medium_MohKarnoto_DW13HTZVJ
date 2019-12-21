import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OneZero from './components/CategoryPage';
import ArtikelDetail from './components/ArtikelDetail';
import Follow from './components/Follow';
import Comment from './components/Comment';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Story from './components/Story';
import Profile from './components/Profile';
import NewStory from './components/NewStory';
import Test from './test';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={App} />
            <Route exact path="/follow" component={Follow} />
            <Route path="/artikeldetail/1" component={ArtikelDetail} />
            {/* <Route path="/Login" component={Login} /> */}
            <Route path="/onezero" component={OneZero} />
            <Route path="/comment" component={Comment} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/header" component={Header} />
            <Route path="/test" component={Test} />
            <Route path="/story" component={Story} />
            <Route path="/profile" component={Profile} />
            <Route path="/new-story" component={NewStory} />

            {/* <Route path="/CategoryPage" component={CategoryPage} /> */}
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

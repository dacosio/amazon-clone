import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    <Router>
        <div className="app">
           <Switch>
            <Route exact path="/">
                <Header/>
                <Home/>
            </Route>
            <Route exact path="/checkout">
                <Header/>
                <Checkout/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
           </Switch>
        </div>
    </Router>
  );
}

export default App;

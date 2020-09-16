import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {auth} from './firebase';
import Login from './components/Login';
import {useStateValue} from './context/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads with empty array... 
    //this is like a dynamic if statement
    auth.onAuthStateChanged(authUser => {
      console.log('User: ', authUser);

      if (authUser) {
        //the user just logged in / te user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //the user was logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])


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

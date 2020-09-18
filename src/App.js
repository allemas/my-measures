import React from 'react';

import Dashboard from "./containers/Dashboard";

import Weight from "./containers/WeightPannel";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";
import Login from './components/Login/Login';
import {connect} from 'react-redux'
import {useCookies} from "react-cookie";
import {fetch} from './api/user';
import {useDispatch, useSelector} from "react-redux";
import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";
import "./styles/main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const axios = require('axios').default;
const jwtDecode = require('jwt-decode');


/**
 * https://github.com/edwardGunawan/Blog-Tutorial/blob/master/dynamic-input-tutorial/src/ManageTeamPage.js
 */

const checkAuth = (props) => {
  var token = localStorage.getItem("MY_MEASURE_AUTH_TOKEN");
  if (token != null) {
    var data = jwtDecode(token);
    // @todo vérifier signature token

    if (props.user == "")
      fetch(data.uid).then(data => {
        props.connectUser(data);
      });

    return true;
  }
  return false;
}


const MyMeasureNavbar = () => {
  const user = useSelector(state => state.user.email);
  return (<Navbar expand="lg" className="my-measures-navbar">
    <Navbar.Brand href="/dashboard">My measures.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Link href="/">Tableau de bord</Nav.Link>
      <Nav.Link href="/weight">Mon Poids</Nav.Link>
      <Nav.Link href="/balance-sheet">Mes Bilans</Nav.Link>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="/balance" className="my-measures-nav-link">{user}</Nav.Link>
    </Navbar.Collapse>

  </Navbar>);
}


const PrivateRoute = ({isLoggedIn, children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({location}) => (isLoggedIn) ? (children)
        : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
      }
    />);
}

function App(props) {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <PrivateRoute path="/weight" isLoggedIn={checkAuth(props)}>
            <MyMeasureNavbar/>
            <Weight/>
          </PrivateRoute>

          <PrivateRoute path="/balance-sheet" isLoggedIn={checkAuth(props)}>
            <MyMeasureNavbar/>
            <BalanceSheet/>
          </PrivateRoute>

          <PrivateRoute path="/" isLoggedIn={checkAuth(props)}>
            <MyMeasureNavbar/>
            <Dashboard/>
          </PrivateRoute>

        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  weight: state,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addWeight: data => dispatch({type: 'ADD_WEIGHT', weight: data.weight, feeling: data.feeling}),
  connectUser: data => dispatch({type: 'CONNECT_USER', user: data})

})

export default connect(mapStateToProps, mapDispatchToProps)(App);

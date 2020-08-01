import React from 'react';

import Dashboard from "./components/Dashboard";
import Weight from "./components/Pannels/Weight/Weight";
import BalanceSheet from "./components/Pannels/BalanceSheet/BalanceSheet";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";


/**
 * https://github.com/edwardGunawan/Blog-Tutorial/blob/master/dynamic-input-tutorial/src/ManageTeamPage.js
 */

function App() {
  return (
    <Router>
      <div>

        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="/">My measures</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="/">Tableau de bord</Nav.Link>
            <Nav.Link href="/weight">Mon Poids</Nav.Link>
            <Nav.Link href="/balance">Mes Bilans</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/weight">
            <Weight/>
          </Route>
          <Route path="/balance">
            <BalanceSheet/>
          </Route>
          <Route path="/">
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;


import React from 'react';
import WeightWidget from "./Widgets/WeightWidget";
import './Dashboard.css';

import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap';


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <h1>Bienvenu Sébastien !</h1>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;

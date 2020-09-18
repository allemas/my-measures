import React from 'react';

import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import PropTypes from 'prop-types'
import WeightWidget from "./Widgets/WeightWidget";

import {useDispatch, useSelector} from "react-redux";

const Dashboard = () => {
  const user = useSelector(state => state.user.email)

  return(
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Bienvenu {user} ! </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet purus feugiat, vehicula tellus
            vitae, commodo ligula. Nulla eu efficitur dolor. Praesent quis tellus at nunc pulvinar tincidunt.
          </p>
        </Container>
      </Jumbotron>
      <Row>
        <Col md={6}>
        </Col>
      </Row>
    </div>
  );
}


export default (Dashboard);

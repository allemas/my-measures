import React from 'react';

import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import PropTypes from 'prop-types'
import WeightWidget from "./Widgets/WeightWidget";

const Dashboard = ({weight, addWeight}) => (
  <div>
    <Jumbotron fluid>
      <Container>
        <h1 onClick={(s) => {
          addWeight({weight: 80, feeling: "test"});
        }}>Bienvenu Sébastien ! </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet purus feugiat, vehicula tellus
          vitae, commodo ligula. Nulla eu efficitur dolor. Praesent quis tellus at nunc pulvinar tincidunt.
        </p>
      </Container>
    </Jumbotron>
    <Row>
      <Col md={6}>
        <WeightWidget/>
      </Col>
    </Row>
  </div>
);

Dashboard.propTypes = {
  weight: PropTypes.array,
  addWeight: PropTypes.func.isRequired
};

export default (Dashboard);

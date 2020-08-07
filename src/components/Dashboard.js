import React from 'react';

import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import WeightChart from "./Weight/WeightChart";
import * as Actions from '../actions';
import PropTypes from 'prop-types'


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
        <WeightChart measures={weight}/>
      </Col>
    </Row>
  </div>
);

export default (Dashboard);

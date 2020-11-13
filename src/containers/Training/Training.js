import React from 'react';
import {Container, Row} from 'react-bootstrap';

import TrainingList from "./TrainingList";
import AddTraining from "./AddTraining";
import "./../../styles/training.css";


const Training = (props) => {
  return (<>
    <Container fluid>
      <Row>
        <TrainingList/>
      </Row>
    </Container>
    <AddTraining/>
  </>)
}
export default Training;

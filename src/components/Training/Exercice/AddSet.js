import React, {useEffect, useState} from 'react';
import {Container, Button, Row, Col, Modal, Form, ButtonGroup, ToggleButton} from 'react-bootstrap';


const AddSet = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
    props.putTraining({
      exercice: e.target.exercise.value, weight: e.target.weight.value, reps: e.target.sets.value
    }).then(response => {
        console.log(response.data);
        props.setTraining(response.data);
        props.setShow(false);
      }
    ).catch(console.error);

  }
  const series = Array.from(Array(25).keys());


  return (<>
    <Modal
      size="xl"
      show={props.modalshow}
      onHide={() => props.setShow(false)}
      dialogClassName="modal-90w">

      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Nouvel exercice
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={submitForm}>
          <Form.Group controlId="exercise">
            <Form.Label>Excercice</Form.Label>
            <Form.Control as="select" custom>
              {props.exercicesList.map((item, i) => (<option key={i}>{item.name}</option>))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="weight">
            <Form.Label>Charge</Form.Label>
            <Form.Control as="input" defaultValue="0" placeholder="Poids"/>
          </Form.Group>
          <Form.Group controlId="sets">
            <Form.Label>Répétitions</Form.Label>
            <Form.Control as="select" custom>
              {series.map((item, i) => (<option key={i}>{item + 1}</option>))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Button variant="primary" type="submit">
              Enregistrer
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  </>);
};

export default AddSet;

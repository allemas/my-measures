import React, {useEffect, useReducer, useState} from "react";
import {Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {Button, Form, Modal, Toast} from "react-bootstrap";
import {useSelector} from "react-redux";
import weightReducer, {initialState} from "../../store/weight";
import {post} from "../../api/weight";
import MeasureSuccessToast from '../Toast/MeasureSuccessToast';

const AddWeight = ({state, dispatch}) => {
  const [modalshow, setShow] = useState(false);
  const [showA, setShowToast] = useState(false);
  const user = useSelector(state => state.user);

  const submitForm = (e) => {
    e.preventDefault();

    const {weight, feeling} = e.target;
    const w = weight.value.replace(",", ".");
    const date = new Date();

    post({
      value: parseInt(w),
      feeling: feeling.value,
      user: "/users/" + user.uid,
      "date": date.toISOString(),
    }).then(response => {
      dispatch({
        type: 'ADD_WEIGHT',
        data: {
          value: parseInt(w),
          feeling: feeling.value,
          user: "/users/" + user.uid,
          "date": date.toISOString(),
        }
      });
      setShow(false);
      setShowToast(true);

    }).catch(err => {
      console.error(err);
    });
  }


  return (
    <div style={{marginTop: 25, marginBottom: 15, textAlign: 'right'}}>
      <Fab color="primary" variant="extended" style={{boxShadow: "none"}} onClick={() => setShow(true)}>
        <AddIcon/>
        Ajouter une mesure
      </Fab>

      <MeasureSuccessToast showA={showA} setShowToast={setShowToast}/>

      <Modal
        size="xl"
        show={modalshow}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Nouvelle mesure de poids
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitForm}>
            <Form.Group controlId="">
              <Form.Control type="text" placeholder="Mon poids ?" name="weight"/>
            </Form.Group>
            <Form.Group controlId="">
              <Form.Control as="textarea" rows="3" name="feeling" placeholder="Comment je me sens ?"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Enregistrer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
    ;
}

export default AddWeight;

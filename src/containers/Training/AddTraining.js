import {Fab} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Modal, Form, Col, ToggleButton, Button, ButtonGroup} from "react-bootstrap";


import React, {useState} from "react";
import {Add} from "@material-ui/icons";
import bodyparts from "../../api/bodyparts";
import {useDispatch, useSelector} from "react-redux";
import {postTraining} from './../../api/training';


const AddTraining = () => {
  const [modalshow, setShow] = useState(false);

  const [checked, setChecked] = useState(() => {
      var data = [];

      bodyparts.map(part => {
        data[part.selector] = false;
      });

      return data;
    }
  );

  const dispatch = useDispatch();
  const addTraining = (data) => dispatch({type: "ADD_TRAINING", training: data});



  const user = useSelector(state => state.user);

  const classes = makeStyles((theme) => ({
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }))();


  const handleCheckboxesChange = (e) => {
    e.preventDefault();
    setChecked({...checked, [e.target.name]: !checked[e.target.name]})
  };

  const submitForm = (e) => {
    e.preventDefault();

    var result = Object.keys(checked)
      .reduce((o, key) => {
        checked[key] === true && (o[key] = checked[key]);
        return o;
      }, {});
    result = Object.keys(result);

    postTraining({
      user: user.uid,
      "status": "started",
      "set": 20,
      exercices: result
    }).then(response => {
      addTraining([response.data]);
      setShow(false);
      console.log(response);
    }).catch(err => {
      console.log(err);
    });


    console.log(result);
  };

  return (<>
      <Fab color="primary" aria-label="add" className={classes.absolute} onClick={() => setShow(true)}>
        <Add/>
      </Fab>

      <Modal
        size="xl"
        show={modalshow}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w">

        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Nouvel entrainement
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={submitForm}>
            <div className="col-md-12">
              <ButtonGroup toggle>
                {bodyparts.map((item) => (
                  <ToggleButton
                    type="checkbox"
                    name={item.selector}
                    key={item.selector}
                    checked={checked[item.selector]}
                    onChange={handleCheckboxesChange}
                  >
                    {item.label}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>
            <>&nbsp;</>
            <Form.Group as={Col} controlId="series">
              <Form.Control type="text" placeholder="Nombre de séries"/>
            </Form.Group>
            <>&nbsp;</>
            <Form.Group as={Col}>
              <Button variant="primary" type="submit">
                Enregistrer
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default AddTraining;

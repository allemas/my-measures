import React, {useEffect, useState} from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap';
import {useParams} from "react-router";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import {getTrainingByUid, putTraining} from "../../api/training";
import {getExercices} from "../../api/exercices";
import AddSet from "./Exercice/AddSet";


const TrainingDetail = (props) => {
  const [modalshow, setShow] = useState(false);
  const [exercicesList, setExercice] = useState([]);
  const [training, setTrainings] = useState(false);
  const {id_training} = useParams();

  useEffect(() => {
    getTrainingByUid(id_training).then(data => {
      setTrainings(data);
    }).catch(console.error);
  }, [JSON.stringify(training)]);

  useEffect(() => {
    getExercices().then(item => {
      setExercice(item.data);
    });
  }, [JSON.stringify(exercicesList)]);

  const sumWeight = (items) => {
    var val = 0;
    items.forEach(item => {
      val += parseInt(item.weight);
    });
    return val;
  }


  return (<>
    <Container fluid>
      <Row> <Col className="toolbar-training">
        <Button onClick={() => setShow(true)}>Nouvelle série</Button>
      </Col></Row>
      <Row>
        <Col>
          <p>Vous avez effectué {training ? training.bodyPart.length : 0} séries / {training ? training.bodyPart.length : 0} planifiée</p>
        </Col>
        <Col>
          {training ?
            <b>Tonnage : {sumWeight(training.bodyPart)} Kg</b>
            : ""}
        </Col>

      </Row>
      <Row>&nbsp;</Row>
      <TableContainer component={Paper}>
        {training ?
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Charge (kg)</TableCell>
                <TableCell>Répétitions</TableCell>
                <TableCell>#</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {training.bodyPart.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.exercice}</TableCell>
                  <TableCell>{item.weight}</TableCell>
                  <TableCell>{item.reps}</TableCell>
                  <TableCell>{item.weight * item.reps}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          : ""}
      </TableContainer>
      <AddSet modalshow={modalshow} setShow={setShow} exercicesList={exercicesList} putTraining={(data) => {
        training.bodyPart.push(data);
        return putTraining(training);
      }} setTraining={setTrainings} training={training}/>
    </Container>
  </>)
}
export default TrainingDetail;

import React, {useEffect,} from 'react';
import {Container} from 'react-bootstrap';

import {fetchTraining} from '../../api/training';
import {useDispatch, useSelector} from 'react-redux'
import "./../../styles/training.css";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const TrainingList = (props) => {
  const dispatch = useDispatch();
  const addTraining = (data) => dispatch({type: "ASYNC_LOAD_TRAINING", listTraining: data});

  const listTraining = useSelector(state => state.training);
  const user = useSelector(state => state.user);

  useEffect(() => {
    fetchTraining(user.uid).then(response => {
      console.log(response);
      addTraining(response.data);
    }).catch(console.error);

  }, [JSON.stringify(user)]);


  return (<>
    <Container fluid>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {listTraining.map((row, index) => (
              <TableRow key={row.uid}>
                <TableCell component="th" scope="row">
                  Entrainement #{index + 1}
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>
                  <Link to={`/training/show/${row.uuid}`} className="training-button">Editer</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  </>)
}
export default TrainingList;

import React, {useEffect, useReducer, useState} from "react";
import {Row, Col, Container, Alert} from 'react-bootstrap';
import ReactLoading from 'react-loading';
import {fetchUserWeight} from '../../api/weight';
import {useSelector} from 'react-redux'

import "./style.css";
import WeightTable from "./WeightTable";
import WeightChart from "./WeightChart";
import AddWeight from "./AddWeight";
import weightReducer, {initialState} from "../../store/weight";

const Weight = (props) => {
  const [state, dispatch] = useReducer(weightReducer, [], initialState);
  const user = useSelector(state => state.user);

  useEffect(() => {
    fetchUserWeight(user).then((response) => {
      console.log(response);
      dispatch({
        type: 'ASYNCH_LOAD_WEIGHT',
        data: response.data
      });
    });
  }, [user]);


  return (
    <>
      <Container fluid>
        {state.length != 0 ?
          <Container fluid>
            <Row>
              <Col>
                <div className="caneva-weight">
                  <WeightChart measures={state}/>
                </div>
              </Col>
            </Row>
            <AddWeight state={state} dispatch={dispatch}/>
            <Row>
              <WeightTable weight={state} dispatch={dispatch}/>
            </Row>
          </Container>

          :

          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
            <ReactLoading type='bars' color="#000"/>
          </div>
        }
      </Container>
    </>
  )
}


export default Weight;

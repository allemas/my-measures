import React, {useEffect, useReducer, useState} from 'react';
import {Row, Col, Container, Modal, Form, Button} from 'react-bootstrap';
import {pushbalance, getBalance} from '../../api/weight';

import balanceSheetReducer, {initialState} from "../../store/balanceSheet";
import {useSelector} from 'react-redux'
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import BodyMeasuresTable from "../../components/Tables/BodyMeasuresTable/BodyMeasuresTable";
import AddBalanceSheetModal from "./AddBalanceSheetModal";


const BalanceSheetPage = (props) => {
  const user = useSelector(state => state.user);
  const [state, dispatch] = useReducer(balanceSheetReducer, [], initialState);
  const [modalshow, setShow] = useState(false);

  useEffect(() => {
    getBalance({user_uid: user.uid}).then(response => {
      console.log(response.data);
      dispatch({
        type: "BALANCE_SHEET_LOAD_ASYNC",
        data: response.data
      });
    }).catch(console.log);
  }, [user]);

  /*
  * https://thoughtbot.com/blog/using-redux-with-react-hooks
  */
  const onSubmit = event => {
    event.preventDefault();
    const {chest, shoulders, thigh, arms, back, waist} = event.target;
    const date = new Date();


    pushbalance({
      "date": date.toISOString(),
      "chest": parseInt(chest.value),
      "shoulders": parseInt(shoulders.value),
      "arms": parseInt(arms.value),
      "back": parseInt(back.value),
      "waist": parseInt(waist.value),
      "thigh": parseInt(thigh.value),
      user: user.uid
    }).then((response) => {
      dispatch({
        type: "BALANCE_SHEET_ADD",
        data: {
          "date": response.data.date,
          "chest": response.data.chest,
          "shoulders": response.data.shoulders,
          "arms": response.data.arms,
          "back": response.data.back,
          "waist": response.data.waist,
          "thigh": response.data.thigh,
          user: response.data.user,
        }
      });
    }).catch(console.log);


  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div style={{marginTop: 10, textAlign: 'right'}}>
              <Fab color="primary" variant="extended" style={{boxShadow: "none", background: "#30343F"}}
                   onClick={() => setShow(true)}>
                <AddIcon/>
                Créer un bilan
              </Fab>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <BodyMeasuresTable bodydata={state}/>
          </Col>
        </Row>
      </Container>
      <div>
        <AddBalanceSheetModal onSubmit={onSubmit} setShow={setShow} modalShow={modalshow}/>
      </div>
    </>
  )
    ;
}

export default BalanceSheetPage;


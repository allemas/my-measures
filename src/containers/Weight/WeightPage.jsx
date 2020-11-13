import React, {useEffect, useReducer, useState} from "react";
import {Row, Col, Container, Alert} from 'react-bootstrap';
import {useSelector} from 'react-redux'
import LoaderMyMeasure from "../../components/Loader/Loader";
import WeightTable from "../../containers/Weight/WeightTable";
import AddWeight from "../../containers/Weight/AddWeight";
import weightReducer from "../../store/weight";
import {fetchUserWeight} from "../../api/weight";
import ChartLine from "../../components/Chart/ChartLine";


const initialState = () => {
  return {
    'items': [],
    'currentPage': 0,
    'currentsItems': []
  };
}

const WeightPage = (props) => {
  const user = useSelector(state => state.user);
  const [state, dispatch] = useReducer(weightReducer, initialState());

  useEffect(() => {
    fetchUserWeight(user).then((response) => {
      dispatch({type: "LOAD_ASYNC", data: response.data});
      dispatch({type: "WEIGHT_FOR_PAGE"});
    });
  }, [user]);


  return (
    <Container fluid>
      <LoaderMyMeasure isVisible={state.currentsItems.length === 0}/>
      {state.currentsItems.length > 0 &&
      <>
        <ChartLine measures={state.currentsItems}/>
        <AddWeight state={state.currentsItems} dispatch={dispatch}/>
        <WeightTable weight={state.items} dispatch={dispatch}/>
      </>
      }
    </Container>);

};

export default WeightPage;

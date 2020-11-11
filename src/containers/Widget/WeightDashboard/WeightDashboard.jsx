import React from "react";
import {Card} from "react-bootstrap";
import Metric from "../../../components/Weight/Widget/Metric";


const WeightDashboard = (props) => {
  return (<>
    <Metric weight={props.weight}/>
  </>)

};

export default WeightDashboard;

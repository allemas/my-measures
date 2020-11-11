import React from 'react';
import {Card} from "react-bootstrap";

const ThisMonth = (props) => {

  return (<>
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          value
        </Card.Text>
      </Card.Body>
    </Card>  </>)

}

export default ThisMonth;

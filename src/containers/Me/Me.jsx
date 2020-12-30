import React, {useEffect, useState} from "react";
import {Container, Row, Col, Jumbotron, Button} from "react-bootstrap";
import {useSelector} from "react-redux";

const Me = () => {
  const user = useSelector(state => state.user);

  return (<>
    <Jumbotron fluid>
      <Container>
        <h1>Bonjour {user.email} ! </h1>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h3>Mes informations</h3>
          <p>{user.email}</p>
          <p>{user.roles}</p>
        </Col>
        <Col xs={12} md={6}>
          <Row>
            <Row>
              <p>Le mode public rendra visible vos résultat dans le leaderboard</p>
              <p>Mode actuel : Non public</p>
            </Row>
            <Row>
              <Button>Passer en mode public</Button>
            </Row>
          </Row>
        </Col>
      </Row>

    </Container>

  </>)
};


export default Me;

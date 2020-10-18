import React, {useEffect} from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import {connect} from 'react-redux'
import {useSelector} from "react-redux";

const Dashboard = (props) => {
  const user = useSelector(state => state.user.email);
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Bienvenu {user} ! </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet purus feugiat, vehicula tellus
            vitae, commodo ligula. Nulla eu efficitur dolor. Praesent quis tellus at nunc pulvinar tincidunt.
          </p>
        </Container>
      </Jumbotron>
      <Row>
        <Col md={6}>

        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  weight: state.weight,
});

const mapDispatchToProps = dispatch => ({
  addWeight: data => dispatch({type: 'ADD_WEIGHT', weight: data.weight, feeling: data.feeling, date: data.date}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

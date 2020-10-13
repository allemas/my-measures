import React, {useEffect} from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import {connect} from 'react-redux'
import {useSelector} from "react-redux";
import WeightChart from "./Weight/WeightChart";
import {apifetcher} from '../api/weight';

const Dashboard = (props) => {
  const user = useSelector(state => state.user.email);
  const weights = useSelector(state => state.weight);

  const user_id = useSelector(state => state.user.uid);

  useEffect(() => {
    apifetcher({
      user_uid: user_id
    }).then(response => {
        let list = response.data.slice(-10);
        list.map(item => {
          props.addWeight({
            weight: item.value,
            date: item.date,
            feeling: item.feeling
          });
        });
      }
    ).catch(err => {
      console.log(err)
    });
  }, []);

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
          <WeightChart measures={weights.map(item => {

            var mydate = new Date(item.date);
            return {
              ...item,
              'date': mydate.toString("dd-mm")
            }
          })
          }/>
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

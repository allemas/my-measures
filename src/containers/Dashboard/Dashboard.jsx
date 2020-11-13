import React, {useEffect, useState} from "react";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import OneLineTable from "../../components/Tables/OneLineTable/OneLineTable";
import {getLastBalanceSheet} from "../../api/balanceSheet";
import {fetchUserWeightShort} from "../../api/weight";
import ChartLine from "../../components/Chart/ChartLine";
import FlatCard from "../../components/FlatCard/FlatCard";

const Dashboard = (props) => {
  const user = useSelector(state => state.user);
  const [balance, setBalance] = useState(false);
  const [weight, setWeight] = useState(false);
  const [currentWeight, setCurrentWeight] = useState(false);

  useEffect(() => {
    getLastBalanceSheet(user.uid).then(response => {
      setBalance(response.data);
      console.log(JSON.stringify(response.data));

    }).catch(console.log);
  }, [user]);

  useEffect(() => {
    fetchUserWeightShort(user.uid).then(response => {
      setCurrentWeight(response.data[0].value);

      setWeight(response.data.reverse());
    }).catch(console.log);
  }, [user]);


  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Bienvenu {user.email} ! </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet purus feugiat, vehicula tellus
            vitae, commodo ligula. Nulla eu efficitur dolor. Praesent quis tellus at nunc pulvinar tincidunt.
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={3}>
            {currentWeight != false &&
            <FlatCard weight={currentWeight}/>
            }
          </Col>
          <Col md={9}>
            {balance != false &&
              <OneLineTable balances={balance}/>
            }
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col>
            <ChartLine measures={weight || [{'value': 0}]}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import {Table, Accordion, Card, Button} from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import {Form, Row, Col, Container} from 'react-bootstrap';

import BodyChart from "./BodyChart";
import OverviewTab from "./OverviewTab";

class BalanceSheet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      measures: [
        {arms: 10, thighs: 25, shoulders: 15, back: 110, chest: 150, waist: 110, date: 1594906105868},
      ], form: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const {name, value} = event.target;
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name.toLowerCase()]: value
      }
    }));
  }

  handleSubmit(event) {
    const values = {
      ...this.state.form,
      date: Date.now()
    };

    this.setState(prevState => ({
      ...prevState,
      measures: prevState.measures.concat(values)
    }));

    event.preventDefault();
  }


  render() {
    return (
      <>

        <Container fluid>
          <Row>
            <Col>
              <OverviewTab measures={this.state.measures}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Faire un bilan</h5>
              <Form onSubmit={this.handleSubmit} onChange={this.handleChange} className="section">
                <Form.Group>
                  <Form.Label>Mesures</Form.Label>

                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="Pectoraux" name="chest"/>
                    </Col>
                    <Col>
                      <Form.Control placeholder="Epaules" name="shoulders"/>
                    </Col>
                    <Col>
                      <Form.Control placeholder="Cuisses" name="thighs"/>
                    </Col>
                    <Col>
                      <Form.Control placeholder="Bras" name="arms"/>
                    </Col>
                    <Col>
                      <Form.Control placeholder="Dos" name="back"/>
                    </Col>
                    <Col>
                      <Form.Control placeholder="Taille" name="waist"/>
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>

                  <Form.Label>Commentaire</Form.Label>
                  <Form.Row>
                    <Col>
                      <Form.Group controlId="">
                        <Form.Control as="textarea" rows="3" name="feeling" placeholder="Comment je me sens ?"/>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Envoyer
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              {/*
        <BodyChart measures={this.state.measures}/>
          */
              }
            </Col>
          </Row>
        </Container>
      </>

    );
  }


}

export default BalanceSheet;

import React from 'react';
import {Table, Accordion, Card, Button} from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import {Form, Row, Col, Container} from 'react-bootstrap';

import "../all.css"

class Body extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      measures: [
        {arms: 10, quads: 25, chest: 150, taille: 110, back: 110, date: 1594906105868},
        {arms: 11, quads: 24, chest: 120, taille: 100, back: 150, date: 1594906105868},
        {arms: 15, quads: 26, chest: 100, taille: 110, back: 120, date: 1594906105868},


      ], form: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const {name, value} = event.target;
    console.log(name);

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value
      }
    }));

    console.log(this.state);
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
          <Row className="section">
            <Col>
              <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                  <Form.Row>
                    <Col>
                      <Form.Control as="select" size="lg" custom name="type">
                        <option value="no-selected">Muscle ?</option>
                        <option>Pectoraux</option>
                        <option>Epaules</option>
                        <option>Cuisses</option>
                        <option>Bras</option>
                        <option>Dos</option>
                        <option>Taille</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control placeholder="Mesure ?" size="lg" name="weight"/>
                    </Col>
                    <Col>
                      <Button variant="primary" size="lg" type="submit">
                        Sauvegarder
                      </Button>
                    </Col>
                  </Form.Row>
                </Form.Group>

              </Form>
            </Col>
          </Row>


        </Container>
      </>

    )
      ;
  }


}

export default Body;

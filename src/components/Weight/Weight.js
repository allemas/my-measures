import React, {useState} from 'react';
import {Form, Row, Col, Container, Alert, Button, Collapse} from 'react-bootstrap';
import DataTable, {createTheme} from 'react-data-table-component';
import WeightChart from "./WeightChart";
import {fetch, post, apifetcher} from '../../api/weight';
import ReactLoading from 'react-loading';
import checkAuth from "../Login/CheckAuth";
import "../../styles/main.css";

class Weight extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {},
      isLoading: checkAuth(this.props.user),
      isSuccess: false,
      isError: false,
      addFormOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    const that = this;

    apifetcher({
      user_uid: this.props.user.uid
    }).then(response => {

        response.data.map(item => {
          that.props.addWeight({
            weight: item.value,
            date: item.date,
            feeling: item.feeling
          });
        });

        that.setState({...that.state, isLoading: false});
      }
    ).catch(err => {
      console.log(err)
    });

  }

  handleChange(event) {
    const {name, value} = event.target;

    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const {weight, feeling} = this.state.form;

    var that = this;
    const w = weight.replace(",", ".");
    const date = new Date();

    post({
      value: parseInt(w),
      feeling: feeling,
      user: "/users/" + this.props.user.uid,
      "date": date.toISOString(),
    }).then(data => {
      that.setState({...that.state, isSuccess: !that.state.isSuccess});
      that.props.addWeight({
        weight: w,
        date: date.toISOString(),
        feeling: feeling
      });
    }).catch(err => {
      console.error(err);
    });


  }

  render() {
    const columns = [
      {
        name: 'Date',
        selector: 'date',
        maxWidth: '250px',
        sortable: true,
      },
      {
        maxWidth: '100px',
        name: 'Poids',
        selector: 'weight',
        left: true,
        sortable: true,
      },
      {
        wrap: true,
        name: 'Comment je me sens ?',
        selector: 'feeling',
        hide: 'sm',
        compact: true,
      },
    ];

    return (

      <Container fluid>
        <Row>&nbsp;</Row>
        {this.state.isSuccess &&
        <Row>
          <Col>

            <Alert variant="success" onClose={() => this.setState({...this.state, isSuccess: !this.state.isSuccess})}
                   dismissible>
              <Alert.Heading>Bravo !</Alert.Heading>
              <p>Votre mesure a bien été enregistrée ! </p>
            </Alert>
          </Col>
        </Row>
        }


        {this.state.isLoading &&
        <ReactLoading type='bars' color="#000"/>
        }
        {this.state.isLoading == false &&
        <Row>
          <Col>
            <div className="caneva-weight">
              <WeightChart measures={this.props.weight}/>
            </div>
          </Col>
        </Row>
        }

        <Row>&nbsp;</Row>
        <Row>
          <Col>
            <Button
              onClick={() => this.setState({...this.state, addFormOpen: !this.state.addFormOpen})}
              aria-controls="example-collapse-text"
              aria-expanded={this.state.addFormOpen}
              className="buttonadd"
            >+</Button>
            <Collapse in={this.state.addFormOpen}>
              <div id="example-collapse-text">
                <Form onSubmit={this.handleSubmit} onChange={this.handleChange} id="weight-form">
                  <Form.Group controlId="">
                    <Form.Control type="text" placeholder="Mon poids ?" name="weight"/>
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Control as="textarea" rows="3" name="feeling" placeholder="Comment je me sens ?"/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Enregistrer
                  </Button>
                </Form>
              </div>
            </Collapse>
          </Col>
        </Row>

        <Row className="section">
          <Col>
            <DataTable
              title="Evolution du poids"
              columns={columns}
              responsive={true}
              data={this.props.weight.map(item => {
                var mydate = new Date(item.date);
                return {
                  ...item,
                  'date': mydate.toLocaleDateString('fr-FR') + ' ' + mydate.toLocaleTimeString('fr-FR')
                }
              })
              }
              pagination={true}
            />
          </Col>
        </Row>


      </Container>
    );
  }
}

export default Weight;

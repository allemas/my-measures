import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Form, Row, Col, Container} from 'react-bootstrap';
import DataTable, { createTheme } from 'react-data-table-component';

import WeightChart from "./WeightChart";
import {fetch} from '../../api/weight';

import ReactLoading from 'react-loading';


class Weight extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props);


    this.state = {
      form: {},
      isLoading: true,
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const props = this.props;
    const state = this.state;
    const that = this;
    fetch('all').then(function (data) {
      props.fetchWeight(data);
      that.setState({...state, isLoading: false});
    })
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
    const {weight, feeling} = this.state.form;

    this.props.addWeight({
      weight: weight.replace(",", "."),
      feeling: feeling
    });


    event.preventDefault();
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

    const
      ExpanableComponent = ({data}) => <div className={"doBktq"}>{data.feeling}</div>;

    return (
      <Container fluid>
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

        <Row className="section">
          <Col>


            <DataTable
              title="Mon poids"
              columns={columns}
              responsive={true}
              expandableRows={'sm'}
              expandableRowsComponent={<ExpanableComponent/>}
              data={this.props.weight}
              expandableRowsHideExpander='sm'
              pagination={true}

            />
          </Col>
        </Row>

        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Weight;

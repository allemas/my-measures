import React from 'react';
import {Table, Accordion, Card, Button} from 'react-bootstrap';
import {Line} from 'react-chartjs-2';
import {Form, Row, Col, Container} from 'react-bootstrap';
import DataTable from 'react-data-table-component';

import '../all.css';


class Weight extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {weight: 85, feeling: "Ca va bien", date: Date.now()},
        {weight: 86, feeling: "Ca va bien", date: Date.now()},
        {weight: 85.5, feeling: "Ca va bien", date: Date.now()},
        {weight: 84.5, feeling: "Ca va bien", date: Date.now()},
        {
          weight: 82.5,
          feeling: "Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien ",
          date: Date.now()
        },
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
        [name]: value
      }
    }));
  }

  handleSubmit(event) {
    const {weight, feeling} = this.state.form;

    this.setState(prevState => ({
      ...prevState,
      items: this.state.items.concat({
        weight: weight.replace(",", "."), feeling: feeling, date: Date.now()
      })
    }));

    event.preventDefault();
  }

  render() {


    const isMobile = window.innerWidth < 480;
    const showItems = isMobile ? 1 : 3;

    console.log(window.innerWidth);
    console.log(isMobile);

    const data2 = [{id: 1, title: 'Conan the Barbarian', year: '1982'}];

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


    const data = {
      labels: this.state.items.map((val) => new Date(val.date * 1000).toDateString()),
      datasets: [
        {
          label: 'Mon poids',
          fill: true,
          yAxes: [
            {
              // stacked: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }
          ],

          data: this.state.items.map((val) => val.weight),
        }
      ]
    };

    const
      ExpanableComponent = ({data}) => <div className={"doBktq"}>{data.feeling}</div>;

    const options = {
      title: {
        display: true,
        text: "Chart Title"
      },
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      scales: {

        yAxes: [
          {
            ticks: {
              suggestedMin: Math.min.apply(Math, this.state.items.map((val) => val.weight)) - 15,
              suggestedMax: Math.max.apply(Math, this.state.items.map((val) => val.weight)) + 5,
            }
          }
        ]
      }
    };


    return (

      <Container fluid>
        <Row>
          <Col>
            <div className="caneva-weight">
              <Line data={data} height={100}
                    width={null} options={options}
              />
            </div>
          </Col>
        </Row>

        <Row className="section">
          <Col>
            <DataTable
              title="Mon poids"
              columns={columns}
              responsive={true}
              expandableRows={'sm'}
              expandableRowsComponent={<ExpanableComponent/>}
              data={this.state.items}
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
    )
      ;
  }
}

export default Weight;

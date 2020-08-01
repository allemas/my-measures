import React from 'react';
import {Table, Accordion, Card, Button} from 'react-bootstrap';
import {Line} from 'react-chartjs-2';


class WeightWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {items: [75, 150, 160, 155, 160, 200], value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({...this.state, value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
        ...this.state, items: this.state.items.concat(this.state.value)
      }
    );
    event.preventDefault();
  }


  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My WeightWidget',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          data: this.state.items
        }
      ]
    };

    return (
      <div>
        <Line data={data}/>
      </div>
    );
  }
}

export default WeightWidget;

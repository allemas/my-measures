import React from 'react';
import {Line} from 'react-chartjs-2';


class BodyChart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }


  render() {

    var data = {
      labels: this.props.measures.map((val) => new Date(val.date * 1000).toDateString()),
      datasets: [
        {
        label: "Arms",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(225,0,0,0.0)",
        borderColor: "red", // The main line color
        borderCapStyle: 'square',
        borderDash: [], // try [5, 15] for instance
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "yellow",
        pointHoverBorderColor: "brown",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        // notice the gap in the data and the spanGaps: true
        data: this.props.measures.map((val) => val.Pectoraux),
        spanGaps: true,
      }, {
        label: "Quads",
        fill: true,
        lineTension: 0.1,
        borderColor: "rgb(167, 105, 0)",
        backgroundColor: "rgba(225,0,0,0.0)",

        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "white",
        pointBackgroundColor: "black",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "brown",
        pointHoverBorderColor: "yellow",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        // notice the gap in the data and the spanGaps: false
        data: this.props.measures.map((val) => val.quads),
        spanGaps: false,
      }

      ]
    };


    return (
      <>
        <Line data={data} height={60}
              width={null} options={{
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        }}
        />
      </>
    )


  }


};

export default BodyChart;

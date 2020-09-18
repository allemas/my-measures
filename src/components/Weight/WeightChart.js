import React from 'react';
import {Line} from 'react-chartjs-2';


class WeightChart extends React.Component {

  render() {
    const data = {
      labels: this.props.measures.map(item => {
        var mydate = new Date(item.date);
        return mydate.toLocaleDateString('fr-FR') + ' ' + mydate.toLocaleTimeString('fr-FR')
      }),


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
          backgroundColor: 'rgba(0, 141, 213,0.2)',
          borderColor: 'rgba(75,192,192,0.5)',
          borderWidth: 2,
          data: this.props.measures.map((val) => val.weight),
        }
      ]
    };

    const options = {
      title: {
        display: true,
        text: "Mon poids"
      },
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(0, 141, 213, 1)',
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
              suggestedMin: Math.min.apply(Math, this.props.measures.map((val) => val.weight)) - 15,
              suggestedMax: Math.max.apply(Math, this.props.measures.map((val) => val.weight)) + 5,
            }
          }
        ]
      }
    };

    return (<>
      <Line data={data} height={100} options={options}/>
    </>);

  }


};

export default (WeightChart);

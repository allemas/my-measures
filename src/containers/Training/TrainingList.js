import React, {useEffect,} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import DataTable from "react-data-table-component";
import {fetchTraining} from '../../api/training';
import {useDispatch, useSelector} from 'react-redux';

import {Bar} from 'react-chartjs-2';
import "./../../styles/training.css";


const TrainingList = (props) => {
  const dispatch = useDispatch();
  const addTraining = (data) => dispatch({type: "ASYNC_LOAD_TRAINING", listTraining: data});

  const listTraining = useSelector(state => state.training);
  const user = useSelector(state => state.user);

  useEffect(() => {
    fetchTraining(user.uid).then(response => {
      console.log(response);


      addTraining(response.data);
      dispatch({type: "TRAINING_FOR_PAGE"});
    }).catch(console.error);
  }, [JSON.stringify(user)]);

  const DeleteBtn = (row) => (
    <Link to={`/training/show/${row.row.uuid}`} className="training-button">Ouvrir</Link>
  );


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
      selector: 'status',
      left: true,
      sortable: true,
    },
    {
      name: 'Action',
      button: true,
      cell: (row) => <DeleteBtn row={row}/>,
    },
  ];


  const sumWeight = (items) => {
    var val = 0;
    items.forEach(item => {
      val += parseInt(item.weight) * parseInt(item.reps);
    });
    return val;
  }


  var t = listTraining.currentsItems.map(item => sumWeight(item.bodyPart));
  const data = {
    datasets: [
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [2500, 2400]
      }
    ]
  };
  const data2 = {
    labels: listTraining.currentsItems.map(item => {
      var mydate = new Date(item.date);
      return mydate.toLocaleDateString('fr-FR') + ' ' + mydate.toLocaleTimeString('fr-FR')
    }).reverse(),

    datasets: [
      {
        label: 'Tonnage',
        data: t.reverse(),
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',

        borderWidth: 1,
      },
    ],
  }
  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (<>
    <Container fluid>

      <span>&nbsp;</span>
      <div style={{height: "300px"}}>
        <Bar
          data={data2}
          width={10}
          height={5}
          options={options}
        />
      </div>

      <DataTable
        title="Mes entrainements"
        columns={columns}
        responsive={true}
        paginationPerPage={10}
        onChangePage={(page, totalRow) => {
          dispatch({type: "TRAINING_FOR_PAGE", current_page: page});

        }}
        data={listTraining.items.map(item => {
          var mydate = new Date(item.date);
          return {
            ...item,
            'date': mydate.toLocaleDateString('fr-FR') + ' ' + mydate.toLocaleTimeString('fr-FR')
          }
        })
        }
        defaultSortField="date"
        pagination
      />
    </Container>
  </>)
}

export default TrainingList;

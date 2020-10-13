const axios = require('axios').default;

const fakeData = [
  {
    "id": 1,
    "exercices": {},
    "feeling": "",
    "date": 1597007847315,
    state: 'finish'
  },
];


export const fetchTraining = (user_id) => {
  return axios.get('https://localhost:8000/trainings?user=/users/' + user_id, {
    headers: {
      Accept: "application/json",
    }
  });
}
export const getTrainingByUid = async (uuid) => {
  var response = await axios.get('https://localhost:8000/trainings/' + uuid, {
    headers: {
      Accept: "application/json",
    }
  });

  var data = await response.data;
  return data;
}


export const postTraining = (data) => {
  var date = new Date;
  console.log({...data, date: date.toISOString()});

  return axios.post('https://localhost:8000/trainings', {...data, date: date.toISOString()});
}

export const putTraining = (data) => {
  var date = new Date;

  console.log({...data, date: date.toISOString()});

  return axios.put('https://localhost:8000/trainings/' + data.uuid, {...data, date: date.toISOString()});
}

export const postTrainingExercice = (data) => {

  var date = new Date;

  return axios.post('https://localhost:8000/trainings', {...data});

}

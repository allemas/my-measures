const axios = require('axios').default;

const fakeData = {
    weight: [
      {"weight": 100, "feeling": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "date": 1597007847315},
      {
        "weight":
          98, "feeling":
          "Duis ornare metus quis massa cursus ullamcorper.", "date":
          1597007847320
      }
      ,
      {
        "weight":
          95,
        "feeling":
          "Maecenas ipsum lacus, tincidunt in maximus eu, tempus nec dui. Nulla id enim ac massa",
        "date":
          1597007847320
      }
      ,
      {
        "weight":
          94,
        "feeling":
          "Maecenas ipsum lacus, tincidunt in maximus eu, tempus nec dui. Nulla id enim ac massa",
        "date":
          1597007847320
      }
      ,
      {
        "weight":
          90,
        "feeling":
          "Maecenas ipsum lacus, tincidunt in maximus eu, tempus nec dui. Nulla id enim ac massa",
        "date":
          1597007847320
      }
      ,
      {
        "weight":
          89,
        "feeling":
          "Maecenas ipsum lacus, tincidunt in maximus eu, tempus nec dui. Nulla id enim ac massa",
        "date":
          1597007847320
      }
      ,
      {
        "weight":
          87,
        "feeling":
          "Maecenas ipsum lacus, tincidunt in maximus eu, tempus nec dui. Nulla id enim ac massa",
        "date":
          1597007847320
      }
      ,
      {
        "weight":
          85,
        "feeling":
          "Maecenas ipsum lacus, tincidunt in maximus eu, tempus nec dui. Nulla id enim ac massa",
        "date":
          1597007847320
      }
      ,
      {
        "weight":
          83,
        "feeling":
          "Maecenas ipsum lacus, tincidunt in maximus eu, tempus nec dui. Nulla id enim ac massa",
        "date":
          1597007847320
      }
      ,
    ]
  }
;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetch = (filter) => {
  return delay(1000).then(() => {
    switch (filter) {
      case 'all':
        return fakeData;
      case 'weight':
        return fakeData.weight;

    }
  });
}

export const post = (data) => {
  return axios.post('https://localhost:8000/weights', data);
}

export const apifetcher = (filter) => {
  return axios.get('https://localhost:8000/weights?users=' + filter.user_uid, {
      headers: {
        Accept: "application/json",
      }
    }
  );
};

export const pushbalance = (data) => {
  return axios.post('https://localhost:8000/balance_sheets', data);
}

export const getBalance = (data) => {
  return axios.get('https://localhost:8000/balance_sheets?user=' + data.user_uid, {
      headers: {
        Accept: "application/json",
      }
    }
  );
};

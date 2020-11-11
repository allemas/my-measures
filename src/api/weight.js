const axios = require('axios').default;

export const post = (data) => {
  return axios.post('https://localhost:8000/weights', data);
}

/**
 * @deprecated
 * @param filter
 * @returns {Promise<AxiosResponse<any>>}
 */
export const apifetcher = (filter) => {
  return axios.get('https://localhost:8000/weights?users=' + filter.user_uid, {
      headers: {
        Accept: "application/json",
      }
    }
  );
};


export const deleteUserWeight = (id) => {
  return axios.delete('https://localhost:8000/weights/' + id, {
      headers: {
        Accept: "application/json",
      }
    }
  );
};


export const fetchUserWeight = (filter) => {
  return axios.get('https://localhost:8000/weights?users=' + filter.user_uid, {
      headers: {
        Accept: "application/json",
      }
    }
  );
};

export const fetchUserWeightShort = (user_uid) => {
  return axios.get('https://localhost:8000/weights/short?users=' + user_uid+ '&order[date]=desc', {
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

const axios = require('axios').default;

export const fetch = (uid) => {
  return axios.get('https://localhost:8000/users/' + uid);
}

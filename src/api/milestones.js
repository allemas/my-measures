const axios = require('axios').default;

export const getMilestonesForuser = (user_id) => {
  return axios.get('https://localhost:8000/milestones?user=' + user_id ,
    {
      headers: {
        Accept: "application/json",
      }
    }
  );
}

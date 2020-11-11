const axios = require('axios').default;

export const getLastBalanceSheet = (user_id) => {
  return axios.get('https://localhost:8000/balance_sheets/short?user=' + user_id + '&order[date]=desc',
    {
      headers: {
        Accept: "application/json",
      }
    }
  );
}

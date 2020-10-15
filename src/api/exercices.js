const axios = require('axios').default;

export const getExercices = () => {
  return axios.get("https://localhost:8000/exercices",
    {
      headers: {
        Accept: "application/json",
      }
    }
  )
}

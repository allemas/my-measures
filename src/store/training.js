const initialState = () => {
  return []
}

const trainingReducer = (state = initialState(), action) => {

  switch (action.type) {
    case "ADD_TRAINING":
      return [
        ...state,
        ...action.training

      ]
    case "ASYNC_LOAD_TRAINING":
      return [
        ...state,
        ...action.listTraining
      ]
      break;
    case "LOAD_ONE_TRAINING":
      return [
        ...state,
        ...action.trainingData

      ]
    default:
      return state;

  }

};

export default trainingReducer;
//"/trainings/e20582e6-2ff4-41c9-b861-bdc84b5f6d1e"

import * as Type from "../actions/ActionTypes";


const initialState = () => {
  return []
}

const weightReducer = (state = initialState(), action) => {

  switch (action.type) {
    case Type.LOAD_WEIGHT_ASYNC:
      console.log("async")
      return action.data.weight;

    case Type.ADD_WEIGHT:
      return [
        ...state,
        {
          weight: action.weight,
          feeling: action.feeling,
          date: Date.now()
        },
      ];
    default:
      return state;
  }
};

export default weightReducer;

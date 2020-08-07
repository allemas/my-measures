import {ADD_WEIGHT} from "../actions/ActionTypes";

const weightReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WEIGHT:
      console.log(action);
      return [
        ...state,
        {
          weight: action.weight,
          feeling: action.feeling,
          date: Date.now()
        },
      ]
      break;
    default:
      return state;
  }

};


export default weightReducer;

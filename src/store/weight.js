import * as Type from "../actions/ActionTypes";


const initialState = () => {
  return []
}

const weightReducer = (state = initialState(), action) => {

  switch (action.type) {
    case Type.ADD_WEIGHT:
      return [
        ...state,
        {
          weight: action.weight,
          feeling: action.feeling,
          date: action.date
        },
      ];
    default:
      return state;
  }
};

export default weightReducer;

import * as Type from "../actions/ActionTypes";


export const initialState = () => {
  return []
}

const weightReducer = (state = initialState(), action) => {

  switch (action.type) {
    case "ADD_WEIGHT":
      return [
        ...state,
        {
          value: action.data.value,
          feeling: action.data.feeling,
          date: action.data.date
        },
      ];
    case "SUPR_WEIGHT":
      console.log(action);
      return state.filter(item => item.id !== action.id);

    case 'ASYNCH_LOAD_WEIGHT':
      return [
        ...action.data
      ];

    default:
      return state;
  }

};

export default weightReducer;

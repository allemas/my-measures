import {ADD_WEIGHT} from "../actions/ActionTypes";

const initialState = () => {

//  console.log(localStorage.getItem('reduxState'));


  /*if (localStorage.getItem('reduxState')) {
    return localStorage.getItem('reduxState');
  }
*/
  return [
    {weight: 85, feeling: "Ca va bien", date: Date.now()},
    {weight: 86, feeling: "Ca va bien", date: Date.now()},
    {weight: 85.5, feeling: "Ca va bien", date: Date.now()},
    {weight: 84.5, feeling: "Ca va bien", date: Date.now()},
    {
      weight: 82.5,
      feeling: "Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien " +
        "Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien Ca va bien ",
      date: Date.now()
    },
  ];
}

const weightReducer = (state = initialState(), action) => {
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

import {BALANCE_SHEET_ADD, BALANCE_SHEET_LOAD_ASYNC} from "../actions/ActionTypes";

export const initialState = () => {
  return []
}
const balanceSheetReducer = (state = [], action) => {
  switch (action.type) {
    case BALANCE_SHEET_ADD:
      return [
        ...state,
        {
          "date": action.data.date,
          "chest": parseInt(action.data.chest),
          "shoulders": parseInt(action.data.shoulders),
          "arms": parseInt(action.data.arms),
          "back": parseInt(action.data.back),
          "waist": parseInt(action.data.waist),
          "thigh": parseInt(action.data.thigh),
        },
      ]

    case BALANCE_SHEET_LOAD_ASYNC:
      return [
        ...action.data
      ];

    default:
      return state;
  }


};


export default balanceSheetReducer;

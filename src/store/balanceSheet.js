import {BALANCE_SHEET_ADD, BALANCE_SHEET_LOAD_ASYNC} from "../actions/ActionTypes";

const balanceSheetReducer = (state = [], action) => {
  switch (action.type) {
    case BALANCE_SHEET_ADD:
      return [
        ...state,

        {
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
        ...state,
        ...action.data
      ];

    default:
      return state;
  }


};


export default balanceSheetReducer;

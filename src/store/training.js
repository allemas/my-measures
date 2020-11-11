const initialState = () => {
  return {
    'items': [],
    'currentsItems': []
  };
}

const trainingReducer = (state = initialState(), action) => {

  switch (action.type) {
    case "ADD_TRAINING":
      return {
        'items': [
          ...state.items,
          ...action.listTraining,

        ],
        'currentsItems': []
      };

    case "ASYNC_LOAD_TRAINING":
      return {
        'items': [
          ...state.items,
          ...action.listTraining,

        ],
        'currentsItems': []
      };

    case "TRAINING_FOR_PAGE":
      let page = action.current_page || 1,
        per_page = action.per_page_items || 10,
        offset = (page - 1) * per_page;

      return {
        ...state,
        'currentsItems': state.items.slice(offset).slice(0, per_page)
      };


    default:
      return state;

  }

};

export default trainingReducer;

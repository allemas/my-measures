export const initialState = () => {
  return []
}

const weightReducer = (state = initialState(), action) => {

  switch (action.type) {
    case "ADD_WEIGHT":
      return {
        ...state,
        'items': [
          ...state.items,
          {
            value: action.data.value,
            feeling: action.data.feeling,
            date: action.data.date
          }
        ],
      };

    case "SUPR_WEIGHT":
      return {
        'items': state.items.filter(item => item.id !== action.id),
        'currentsItems': state.currentsItems.filter(item => item.id !== action.id),
      };

    case 'LOAD_ASYNC':
      return {
        'items': [
          ...action.data
        ],
        'currentsItems': []
      };

    case 'WEIGHT_FOR_PAGE':
      let page = action.current_page || state.currentPage,
        per_page = action.per_page_items || 10,
        offset = (page - 1) * per_page;

      return {
        ...state,
        'currentsItems': state.items.slice(offset).slice(0, per_page),
        'currentPage': page
      }


    default:
      return state;
  }

};

export default weightReducer;

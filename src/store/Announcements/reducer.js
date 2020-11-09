import actionTypes from './actionTypes';

const initialState = {
  list: [],
  searchData: '',
  similarData: '',
};

const announcementsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_ANNO: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case actionTypes.DELETE_ANNO: {
      return { ...state, list: action.payload };
    }
    case actionTypes.EDIT_ANNO: {
      return { ...state, list: action.payload };
    }
    case actionTypes.SEARCH_ANNO: {
      return { ...state, searchData: action.payload };
    }
    default:
      return state;
  }
};

export default announcementsReducer;

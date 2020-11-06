import actionTypes from './actionTypes';

const initialState = {
  announcements: [],
};

const announcementsReducer = (state = initialState, action = {}) => {
  let result = null;
  switch (action.type) {
    case actionTypes.ADD_ANNO: {
      return {
        ...state,
        announcements: [...state.announcements, action.payload],
      };
    }
    case actionTypes.DELETE_ANNO: {
      result = state.announcements.filter((elem) => elem.id !== action.payload);
      return { ...state, announcements: result };
    }
    case actionTypes.EDIT_ANNO: {
      console.log(action.payload, 'action.payload');
      return { ...state, announcements: action.payload };
    }
    default:
      return state;
  }
};

export default announcementsReducer;

import actionTypes from './actionTypes';

const initialState = {
  announcements: [],
};

const announcementsReducer = (state = initialState, action = {}) => {
  console.log('state', state);
  console.log('action', action);
  let result = null;
  switch (action.type) {
    case actionTypes.ADD_ANNO: {
      result = state.announcements.concat([action.payload]);
      return { ...state, announcements: result };
    }
    case actionTypes.DELETE_ANNO: {
      result = state.announcements.filter((elem) => elem.id !== action.payload);
      return { ...state, announcements: result };
    }
    case actionTypes.EDIT_ANNO: {
      const index = state.announcements.findIndex(
        (elem) => elem.id === action.payload.id
      );
      result = [...state.announcements];
      result[index] = {
        ...result[index],
        title: action.payload.title,
        description: action.payload.description,
      };
      return { ...state, announcements: result };
    }
    default:
      return state;
  }
};

export default announcementsReducer;

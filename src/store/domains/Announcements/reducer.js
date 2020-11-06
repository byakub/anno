import actionTypes from './actionTypes';

const initialState = {
  announcements: [
    { title: 'title1', description: 'description1', date: 'date 1', id: 0 },
    { title: 'title2', description: 'description2', date: 'date 2', id: 1 },
    { title: 'title3', description: 'description3', date: 'date 3', id: 2 },
    { title: 'title4', description: 'description4', date: 'date 4', id: 3 },
    { title: 'title5', description: 'description5', date: 'date 5', id: 4 },
  ],
};

const announcementsReducer = (state = initialState, action = {}) => {
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

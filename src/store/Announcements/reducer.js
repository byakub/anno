import actionTypes from './actionTypes';

const initialState = {
  list: [
    {
      title: 'Business report writing',
      description:
        'I provide professional writing services for assignments and thesis for Bachelors, Masters, and PHD students',
      date: 'November 8, 2020 3:11 AM',
      id: 'q4sag4',
    },
    {
      title: 'British teacher English',
      description: 'Master of theaching ',
      date: 'November 7, 2019 4:21 AM',
      id: 'w4ssg4',
    },
    {
      title: 'Spanish teacher English',
      description: 'I gonna to teach anybody English from Spain',
      date: 'November 6, 2018 5:31 AM',
      id: 'e4s1g4',
    },
    {
      title: 'Buy a car',
      description: 'cheap car',
      date: 'November 5, 2017 6:41 AM',
      id: 'r4saga',
    },
    {
      title: 'Sell a car',
      description: 'good car',
      date: 'November 4, 2017 7:51 AM',
      id: 't4sag4',
    },
    {
      title: 'Dancing teacher',
      description: 'Master of dancing',
      date: 'November 3, 2018 8:01 AM',
      id: 'y4sa54',
    },
    {
      title: 'Business teacher',
      description: 'Master smth',
      date: 'November 2, 2019 9:51 AM',
      id: 'u4sag9',
    },
    {
      title: 'Garage in Lisboa',
      description: 'Garage for car',
      date: 'November 15, 2019 9:51 AM',
      id: 'i4sag9',
    },
    {
      title: 'Attention! RBMK1000',
      description:
        'Engineer Toptunov pushed a AZ5 button in control panel RBMK1000 reactor',
      date: 'April 26, 1986 1:22 AM',
      id: 'o4s1g9',
    },
    {
      title: 'RBMK1000 in Chernobyl',
      description: 'RBMK1000 was exploded in Chornobyl NPP',
      date: 'April 26, 1986 1:23 AM',
      id: 'p4sag9',
    },
  ],
  searchData: '',
  similarData: '',
  currentAnnouncement: '',
};

const announcementsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_ANNOUNCEMENT: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case actionTypes.DELETE_ANNOUNCEMENT: {
      return { ...state, list: action.payload };
    }
    case actionTypes.EDIT_ANNOUNCEMENT: {
      return { ...state, list: action.payload };
    }
    case actionTypes.SEARCH_ANNOUNCEMENT: {
      return { ...state, searchData: action.payload };
    }
    case actionTypes.CURRENT_ANNOUNCEMENT_ID: {
      return { ...state, currentAnnouncement: action.payload };
    }
    default:
      return state;
  }
};

export default announcementsReducer;

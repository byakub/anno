import { combineReducers } from 'redux';

import announcementsReducer from './Announcements/reducer';

const rootReducer = combineReducers({
  announcements: announcementsReducer,
});

export default rootReducer;

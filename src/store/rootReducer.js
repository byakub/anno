import { combineReducers } from 'redux';

import announcementsReducer from './domains/Announcements/reducer';

const rootReducer = combineReducers({
  announcements: announcementsReducer,
});

export default rootReducer;

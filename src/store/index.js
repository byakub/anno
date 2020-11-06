import { createStore } from 'redux';

import throttle from 'lodash.throttle';

import rootReducer from './rootReducer';

import { loadState, saveState } from '../services';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({ announcements: store.getState().announcements });
  }, 1000)
);

export default store;

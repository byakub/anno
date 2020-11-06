import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import throttle from 'lodash.throttle';

import rootReducer from './rootReducer';

import { loadState, saveState } from '../services';

const persistedState = loadState();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.subscribe(
  throttle(() => {
    saveState({ announcements: store.getState().announcements });
  }, 1000)
);

export default store;

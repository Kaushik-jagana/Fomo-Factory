import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import reducer from './reducer';

const PERSISTED_KEYS: string[] = ['symbol', 'prices'];

const middleware = [
  ...getDefaultMiddleware(), // Default middleware provided by Redux Toolkit (including Thunk)
  save({ states: PERSISTED_KEYS }) // redux-localstorage-simple middleware
];

const store = configureStore({
  reducer,
  middleware,
  preloadedState: load({ states: PERSISTED_KEYS }),
});

export default store;

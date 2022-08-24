import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer, { fetchRocketsAPI } from './rockets/rocket';

const rootReducer = combineReducers({
  rocketReducer,
});

const myStore = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk, logger),
);
myStore.dispatch(fetchRocketsAPI());

export default myStore;

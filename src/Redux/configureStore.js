} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer, { fetchRocketsAPI } from './rockets/rocket';
import missionsReducer from './missions/Mission';

const rootReducer = combineReducers({
  mission: missionsReducer,
  rock  { reducer: royMiddleware(thunk, logger),

import thunk from 'redux-thunk';""""""""""} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer, { fetchRocketsAPI } from './rockets/rocket';
import missionsReducer from './missions/Mission';

const rootReducer = combineReducers({
  mission: missionsReducer,
  rocketReducer,
});

const myStore = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk, logger),
import {
  applyMiddleware,
  combineReducers,
);
myStore.dispatch(fetchRocketsAPI());


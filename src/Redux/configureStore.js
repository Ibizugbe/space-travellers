import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer, { fetchRocketsAPI } from './rockets/rocket';
import missionReducer, { fetchMissionsAPI } from './missions/Mission';

const rootReducer = combineReducers({
  mission: missionReducer,
  rocketReducer,
});

const myStore = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk, logger),
);

myStore.dispatch(fetchMissionsAPI());
myStore.dispatch(fetchRocketsAPI());

export default myStore;

import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer, { fetchRocketsAPI } from './rockets/rocket';

const reducer = combineReducers({
  rocketReducer,
});

const elementStore = configureStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchRocketsAPI());

export default elementStore;

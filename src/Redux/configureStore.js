import { combineReducers, missionsReducer, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';

const root = combineReducers({
   mission: missionsReducer,
});

const store = configureStore(
    { reducer: root },
    applyMiddleware(thunk),
  );

export default store;
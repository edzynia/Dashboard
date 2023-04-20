import { combineReducers } from 'redux';

import { positionReducer } from './positios/position-reducer';

export const rootReducer = combineReducers({
  positions: positionReducer,
});

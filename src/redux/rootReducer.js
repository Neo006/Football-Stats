import { combineReducers } from 'redux';
import leaugesReducer from './reducers/leaugesReducer';
import standingsReducer from './reducers/standingsReducer';

const rootReducer = combineReducers({
  leauges: leaugesReducer,
  standings: standingsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import leaugesReducer from './reducers/leaugesReducer';

const rootReducer = combineReducers({
  leauges: leaugesReducer,
});

export default rootReducer;

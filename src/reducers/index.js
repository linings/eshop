import counterReducer from './counter';
import isCartFullReducer from './cart';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counterReducer,
  isCartFullReducer,
});
export default allReducers;

import { combineReducers } from 'redux';
import nav from '../../navigation/reducer';
import auth from './auth';

const reducer = combineReducers({
  nav,
  auth,
});

export default reducer;

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nav from '../../navigation/reducer';
import auth from './auth';

const reducer = combineReducers({
  form,
  nav,
  auth,
});

export default reducer;

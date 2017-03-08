import { combineReducers } from 'redux';
import form from './redux_form_reducer.js'
import auth from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth,
});

export default rootReducer;

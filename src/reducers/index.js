import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projects from './projects';
import psAccounts from './psAccounts';

export default combineReducers({
  projects,
  psAccounts,
  form: formReducer
});

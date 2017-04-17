import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import './index.css';

import {configure} from './store/configureStore';
import * as actions from './actions/actions';
const store = configure();
store.dispatch(actions.startAddProjects());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

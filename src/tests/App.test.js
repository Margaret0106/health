import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const createMockStore = configureMockStore([thunk]);
const mockStoreState = {
  projects: []
};

it('renders without crashing', () => {
  const store = createMockStore(mockStoreState);
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

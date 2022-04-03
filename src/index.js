import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as ACTIONS from './actions.js';
import reducer from './reducer.js';

import './modules/vendors/reset-css/reset-css.css';
import App from './modules/app/app.js';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
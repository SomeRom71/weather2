import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { initialState } from './reducers';

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

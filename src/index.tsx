import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import WeatherComponent from './weather/WeatherComponent';

ReactDOM.render(
  <Provider store={store}>
    <WeatherComponent />
  </Provider>,
  document.getElementById('root')
);
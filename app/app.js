/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import configStore from './store/configStore';

const store = configStore();

let rootElement = document.getElementById('root');

render(
  <Root store={store} />,
  rootElement
);

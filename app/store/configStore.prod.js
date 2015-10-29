/* @flow */

import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState: ?Object): any {
  const store = createStore(rootReducer, initialState);

  return store;
}

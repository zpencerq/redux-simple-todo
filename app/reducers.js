/* @flow */

import { combineReducers } from 'redux';
import { FilterState, TodoState } from './model';
import {
  Action,
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

type Reducer<S, A> = (state: S, action: A) => S;

let visibilityFilter:Reducer<FilterState, Action> =
  (state = SHOW_ALL, action) => {
    switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter || SHOW_ALL;
    default:
      return state;
    }
}

let todos:Reducer<TodoState, Action> = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false
      }];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index || 0),
        Object.assign({}, state[action.index || 0], {
          completed: true
        }),
        ...state.slice((action.index) + 1)
      ];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  todos
});

export default rootReducer;

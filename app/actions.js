/* @flow */

/*
 * action types
 */

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const VisibilityFilterValues =
  Object.keys(VisibilityFilters).map(key => VisibilityFilters[key]);

/*
 * action creators
 */

type ActionType = string;

export type Action = {
  type: ActionType,
  index?: number,
  text?: string,
  filter?: string,
}

export function addTodo(text: string): Action {
  return { type: ADD_TODO, text };
}

export function completeTodo(index: number): Action {
  return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter: string): Action {
  return { type: SET_VISIBILITY_FILTER, filter };
}

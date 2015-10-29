/* @flow */

export type FilterState = string;

export type TodoItem = {
  text: ?string,
  completed: boolean,
};

export type TodoState = Array<TodoItem>;

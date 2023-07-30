import { FetchTodosAction, DeleteTodosAction } from "./todos"

export enum ActionTpyes {
  fetchTodos,
  deleteTodo,
}

export type todoActions = FetchTodosAction | DeleteTodosAction

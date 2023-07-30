import { Todo } from "./../actions/todos"
import { combineReducers } from "redux"
import { todosReducer } from "./todos"

export interface StoreState {
  todos: Todo[]
}

export const reducer = combineReducers<StoreState>({
  todos: todosReducer,
})

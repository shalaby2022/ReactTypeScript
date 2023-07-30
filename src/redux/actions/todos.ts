import axios from "axios"
import { Dispatch } from "redux"
import { ActionTpyes } from "./types"

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTpyes.fetchTodos
  payload: Todo[]
}

export interface DeleteTodosAction {
  type: ActionTpyes.deleteTodo
  payload: number
}

const url = "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const reesponse = await axios.get<Todo[]>(url)
    dispatch<FetchTodosAction>({
      type: ActionTpyes.fetchTodos,
      payload: reesponse.data,
    })
  }
}

export const deleteTodos = (id: number): DeleteTodosAction => {
  return {
    type: ActionTpyes.deleteTodo,
    payload: id,
  }
}

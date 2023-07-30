import { Todo, ActionTpyes, todoActions } from "./../actions"

export const todosReducer = (state: Todo[] = [], action: todoActions) => {
  switch (action.type) {
    case ActionTpyes.fetchTodos:
      return action.payload
    case ActionTpyes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state
  }
}

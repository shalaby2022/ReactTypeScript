import React from "react"
import { connect } from "react-redux"
import { Todo, deleteTodos, fetchTodos } from "../redux/actions/todos"
import { StoreState } from "../redux/reducers"

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodos: typeof deleteTodos
}

// interface AppState {
//   fetching: boolean
// }

class AppComponent extends React.Component<AppProps> {
  state = { fetching: false }

  onButtonClick = (): void => {
    this.setState({ fetching: true })
    this.props.fetchTodos()
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <>
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            <p>Title: {todo.title}</p>
            <p>IsCompleted: {todo.completed ? "true" : "false"}</p>
          </div>
          <hr />
        </>
      )
    })
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodos(id)
  }

  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching && "LOADING"}
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export default connect(mapStateToProps, { fetchTodos, deleteTodos })(
  AppComponent
)

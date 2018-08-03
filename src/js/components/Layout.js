import React from 'react'
import TodoStore from '../stores/TodoStore'
import * as TodoActions from '../actions/TodoActions'

export default class Layout extends React.Component {
  constructor () {
    super()
    this.getTodos = this.getTodos.bind(this)
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount () {
    TodoStore.on("change", this.getTodos)
    console.log("count", TodoStore.listenerCount("change"))
  }

  componentWillUnmount () {
    TodoStore.unbindListener("change", this.getTodos)
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    })
  }

  createTodo() {
    TodoActions.createTodo(Date.now())
  }

  render () {
    const { todos } = this.state

    const TodoComponents = todos.map((todo) => {
      return <div key={todo.id}> {todo.text} </div>
    })
    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create Todo</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    )
  }
}

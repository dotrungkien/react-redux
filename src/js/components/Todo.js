import React from 'react'

import TodoStore from '../stores/TodoStore'

export default class Todo extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentWillMount () {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  }

  render () {
    const { todos } = this.state

    const TodoComponents = todos.map((todo) => {
      return (
        <div key={todo.id}>
          todo.text
        </div>
      )
    })
    return (
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    )
  }
}

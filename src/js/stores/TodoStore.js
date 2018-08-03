import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
  constructor () {
    super()
    this.todos = [
      {
        id: 115151252,
        text: "ahihi",
        complete: true
      }
    ]
  }

  getAll () {
    return this.todos
  }

  createTodo (text) {
    const id = Date.now()
    this.todos.push({
      id,
      text,
      complete: false
    })
    this.emit('change')
  }

  handleActions (action) {
    switch (action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text)
        break
      }
      default: {
        return
      }
    }
    console.log("Todo store received an action", action.type)
  }
}

const todoStore = new TodoStore()
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher
export default todoStore

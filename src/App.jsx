import './App.css'
import Todo from './Todo'
import AboutTodo from './AboutTodo'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      todos: [],
    }
  }

  render() {
    const doneCount = this.state.todos.filter((todo) => todo.done).length
    return (
      <div>
        <div>
          <AboutTodo
            allLenght={this.state.todos.length}
            doneLenght={doneCount}
          />
          <input value={this.state.name} onChange={this.handleSetName} />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        {this.state.todos.map((todo) => (
          <Todo
            name={todo.name}
            done={todo.done}
            onDone={this.handleSetDone}
            onRemove={this.handleRemove}
          />
        ))}
      </div>
    )
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleAddTodo = () => {
    if (!this.state.name.trim()) {
      alert('invalid name. Try again!')
    } else {
      const todo = {
        name: this.state.name,
        done: false,
      }
      this.setState({
        name: '',
        todos: this.state.todos.concat([todo]),
      })
    }
  }

  handleSetDone = (newDone, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done: newDone } : todo
      ),
    })
  }

  handleRemove = (name) => {
    console.log(name)
    this.setState({
      todos: this.state.todos.filter((todo) => todo.name !== name),
    })
  }
}

export default App

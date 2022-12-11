import './Todo.css'
import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { done } = this.props
    return (
      <div id="todo" className={done ? 'done' : 'undone'}>
        <input
          id="checkbox"
          type="checkbox"
          checked={done}
          onChange={this.handleCheck}
        />
        <span>{this.props.name}</span>
        <button onClick={this.handleRemove} id="deleteButton">
          Delete
        </button>
      </div>
    )
  }

  handleCheck = (e) => {
    const done = e.target.checked
    this.props.onDone(done, this.props.name)
  }

  handleRemove = () => {
    this.props.onRemove(this.props.name)
  }
}
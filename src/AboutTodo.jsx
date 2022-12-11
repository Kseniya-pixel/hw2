import React from 'react';
import './AboutTodo.css';

export default class AboutTodo extends React.Component {
  render() {
    return (
      <div className="AboutTodo">
        <span>All: {this.props.allLenght}</span>
        <span>Done: {this.props.doneLenght}</span>
        <span>Left: {this.props.allLenght - this.props.doneLenght}</span>
      </div>
    );
  }
}


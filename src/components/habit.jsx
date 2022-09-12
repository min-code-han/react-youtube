import React, { Component } from 'react';

class Habit extends Component {
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="count">{count}</span>
        <button
          className="habit-button increase"
          onClick={() => this.props.onIncrement(this.props.habit)}
        >
          ➕
        </button>
        <button
          className="habit-button decrease"
          onClick={() => this.props.onDecrement(this.props.habit)}
        >
          ➖
        </button>
        <button
          className="habit-button delete"
          onClick={() => this.props.onDelete(this.props.habit)}
        >
          🪣
        </button>
      </li>
    );
  }
}

export default Habit;

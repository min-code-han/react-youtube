import React, { Component } from 'react';

class Habit extends Component {
  componentDidMount() {
    // UI상에 등록이 되렀을 때 !
    // 로딩 스피너,,
  }

  componentWillUnmount() {
    // UI상에 사라졌을때 !!
  }

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

import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      {
        id: 0,
        name: 'Reading',
        count: 0,
      },
      {
        id: 1,
        name: 'Running',
        count: 0,
      },
      {
        id: 2,
        name: 'Coding',
        count: 0,
      },
    ],
  };

  handleIncrement = (habit) => {
    const _habits = [...this.state.habits];
    const index = _habits.indexOf(habit);
    _habits[index].count++;
    this.setState({
      habits: _habits,
    });
  };

  handleDecrement = (habit) => {
    const _habits = [...this.state.habits];
    const index = _habits.indexOf(habit);
    const _count = _habits[index].count - 1;
    _habits[index].count = _count < 0 ? 0 : _count;
    this.setState({
      habits: _habits,
    });
  };

  handleDelete = (habit) => {
    const _habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: _habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;

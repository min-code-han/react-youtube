import React, { Component } from 'react';
import Habit from './habit';
import AddForm from './addForm';

class Habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <AddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={() => this.props.onIncrement(habit)}
              onDecrement={() => this.props.onDecrement(habit)}
              onDelete={() => this.props.onDelete(habit)}
            />
          ))}
        </ul>
        <button className="reset-btn" onClick={this.props.onReset}>
          RESET ALL
        </button>
      </>
    );
  }
}

export default Habits;

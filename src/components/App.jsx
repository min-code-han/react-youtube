import React, { Component } from 'react';
import './app.scss';
import Habits from './habits';
import Nav from './nav';

class App extends Component {
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

  handleAdd = (name) => {
    const _habits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
    this.setState({ habits: _habits });
  };

  handleReset = () => {
    this.setState({ habits: [] });
  };

  render() {
    return (
      <>
        <Nav totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

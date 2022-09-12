import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <header>
        <h1>HABIT TRACKER 📗</h1>
        <div className="nav-total">
          <p>total habits: </p>
          <span className="nav-total-count">{this.props.totalCount}</span>
        </div>
      </header>
    );
  }
}

export default Nav;

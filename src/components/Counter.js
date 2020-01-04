import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  incrementCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrementCount = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  formatCounter = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses = count => {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : count > 0 ? "primary" : "danger";
    return classes;
  };

  renderTags = () => {
    if (this.state.tags.length === 0) return <p>There are no tags.</p>;
    return (
      <ul>
        {this.state.tags.map((tag, id) => (
          <li key={id}>{tag}</li>
        ))}
      </ul>
    );
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <h3 className="header">Learning React</h3>
        <p className="lead bg-darken-2">Counter App</p>
        <span className={this.getBadgeClasses(count)}>
          {this.formatCounter()}
        </span>
        <button className="btn btn-secondary m-2" onClick={this.incrementCount}>
          Increment +
        </button>
        <button className="btn btn-secondary m-2" onClick={this.decrementCount}>
          Decrement -
        </button>

        <div>
          {this.state.tags.length === 0 && (
            <button className="btn btn-primary">Add Tags</button>
          )}
          {this.renderTags()}
        </div>
      </div>
    );
  }
}

export default Counter;

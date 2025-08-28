import React, { Component } from "react";
 class TodoList extends Component {
  state = {
    tasks: [],
    input: ""
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  addTask = () => {
    if (this.state.input.trim() !== "") {
      this.setState({
        tasks: [...this.state.tasks, this.state.input],
        input: ""
      });
    }
  };
  deleteTask = (index) => {
    this.setState({
      tasks: this.state.tasks.filter((_, i) => i !== index)
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Todo List</h2>
        <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Enter task" />
        <button onClick={this.addTask}>Add</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
 }
 export default TodoList;
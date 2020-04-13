import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="todo-form">
          <input 
            type="text" ref="addInput" id="addInput" placeholder="Enter todo..."
            onChange = { this.handleChange }
          />
          <input type="submit" value="+" />
        </form>
      </div>
    )
  }

  handleChange() {
    this.setState({
      todo: this.refs.addInput.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if ( /\w/.test(this.state.todo))  {
      this.props.onAdd(this.state.todo) 
    }
    this.refs.addInput.value = ''; //clear text input
  }
}
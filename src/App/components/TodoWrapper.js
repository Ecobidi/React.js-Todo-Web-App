import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class TodoWrapper extends Component {
  render() {
    return (
      <div>
        <AddTodo onAdd={this.props.onAdd}/>
        <TodoList 
          todos = {this.props.todos}
          onDelete = {this.props.onDelete}
          onUpdate = {this.props.onUpdate}
        />
      </div>
    )
  }
}
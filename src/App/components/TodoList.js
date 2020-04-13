import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    let todos = this.props.todos.map((todo) => {
      return (
      <TodoItem 
        title={todo.title} key={todo._id}
        _id={todo._id}
        onDelete = {this.props.onDelete}
        onUpdate = {this.props.onUpdate}
      />)
    })
    return (
      <ul className="todo-list">
        {todos}
      </ul>
    )
  }
} 
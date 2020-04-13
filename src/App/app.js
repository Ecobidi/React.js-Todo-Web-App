import React, { Component } from 'react';
import TodoWrapper from './components/TodoWrapper';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this._getData = this._getData.bind(this)
  };
  componentDidMount() {
    this._getData('http://localhost:3000');
  }
  _getData(url) {
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({todos: data}))
  }
  handleDelete(id) {
    //make delete request
    //update the state
    fetch('http://localhost:3000/todo/delete/'+id, {method: 'DELETE' } )
      .then(response => alert(response))
      .catch(() => this._getData('http://localhost:3000')); //the server deleted the resource but due to access-control problem cannot communicate its success to the client
  }
  handleNewTodo(title) {
    //make a post request && update state
    fetch('http://localhost:3000/todo/add', {
      method: 'POST',
      body: JSON.stringify(title) })
      .then(response => response.json())
      .then(data => this.setState({todos: data}))
      .catch(err => console.log(err))
  }
  handleUpdate(title, isCompleted) {
    fetch('http://localhost:3000/todo/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(title)})
      .then(response => response.json())
      //.then(data => this.setState({todos: data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header 
          title = "TODO"
          subtitle = "Never miss a task"
        />
        <TodoWrapper 
          todos = {this.state.todos}
          onDelete = {this.handleDelete}
          onAdd = {this.handleNewTodo}
          onUpdate = {this.handleUpdate}
        />
        <Footer />
      </div>
    )
  }
}
import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onToggleComplete = this.onToggleComplete.bind(this);
  }
  render() {
    return (
      <li className={`todo-item ${this.props.title? 'complete':null}`}>
        <div>
          <input 
            type="checkbox"
            key="checkbox"
            className="check-completed"
            name="isDone" 
            onChange={this.onToggleComplete}
          />
          <span>{this.props.title}</span>
        </div>
        <strong className="delete" onClick={this.onDelete}>&#x2702;</strong>
      </li>
    )
  }
  onDelete(e) {
    let todo = e.target.previousSibling.innerText;
    let boole = confirm('You are about to permanently remove this todo :' + todo);
    if (boole){
      this.props.onDelete(this.props._id); // pass along the todo id
    }
  }
  onToggleComplete(e) {
    if (e.target.checked) {
      this.props.onUpdate(this.props.title, true)
    } else {
      this.props.onUpdate(this.props.title, false)
    }
  }
}

import React from 'react'
import 'bulma'

class Task extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }
  }

  render() {
    return(
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {this.props.name}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>{this.props.description}</p>
            <br />
            <p>Created by: Jess</p>
            <p>{`Priority: ${this.props.priority}`}</p>
            <p>{`Catgeory: ${this.props.category}`}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }
}

export default Task

import React from 'react'
import 'bulma'

class CreateTask extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ name: e.target.value})
  }

  render() {
    return(
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <input
              className="input"
              name="name"
              placeholder="Task Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
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

export default CreateTask

import React from 'react'
import 'bulma'

class Group extends React.Component {
  constructor() {
    super()

    this.state = {
      groups: []
    }
  }

  render() {
    return(
      <div className="card">
        <header className="card-header">
          <p className="card-header-title is-centered">
            {`${this.props.name}`} Group
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>{this.props.description}</p>
            <br />
            <p>Created by: Mary</p>
            <p>{`Priority: ${this.props.priority}`}</p>
            <p>{`Description: ${this.props.description}`}</p>
            <p>{`Users: ${this.props.userId}`}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
          <a href="#" className="card-footer-item">Show Details</a>
        </footer>
      </div>
    )
  }
}

export default Group

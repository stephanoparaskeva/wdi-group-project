import React from 'react'
import 'bulma'
import { Link } from 'react-router-dom'

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
        <div className="card-header">
          <div className="card-header-title is-centered is-size-3">
            {this.props.name}
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            <div className="subtitle is-size-4">{this.props.description}</div>
            <hr />
            <div>
              <content className="content is-6">{`Users: ${this.props.usersAssigned}`}</content>
            </div>
            <div>
              <content className="subtitle is-6">{`User ID: ${this.props.createdBy}`}</content>
            </div>
            <div>
              <content className="subtitle is-6">{`Created date: ${this.props.createdAt}`}</content>
            </div>

          </div>
        </div>
        <div className="card-footer">
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
          <Link to={`/groups/${this.props._id}/tasks`} className="card-footer-item">
            <strong>Tasks</strong>
          </Link>
        </div>
      </div>
    )
  }
}

export default Group

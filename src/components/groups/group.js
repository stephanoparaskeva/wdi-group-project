import React from 'react'
import 'bulma'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../../lib/auth'
import CreateCategory from '../categories1/createCategory.js'

class Group extends React.Component {
  constructor() {
    super()

    this.state = {
      groups: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    axios.delete(`/api/groups/${this.props.match.params.id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/groups'))
      .catch(err => console.log(err.message))
  }

  isOwner() {
    return Auth.isAuthenticated() && this.state.group.user._id === Auth.getPayload().sub
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
          <CreateCategory groupId={this.props._id}>Create Category</CreateCategory>
        </div>
        <div className="card-footer">
          <a href="#" className="card-footer-item">Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </div>
        <footer className="card-footer">
          {this.isOwner() && <a href="#" className="card-footer-item"><strong>Edit</strong></a>}
          {this.isOwner() && <a href="/groups" className="card-footer-item" onClick={this.handleDelete}><strong>Delete</strong></a>}
          <Link to={`/groups/${this.props._id}/tasks`} className="card-footer-item">
            <strong>Tasks</strong>
          </Link>
        </footer>
      </div>
    )
  }
}

export default Group

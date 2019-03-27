import React from 'react'
import 'bulma'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'
import CreateCategory from '../categories/createCategory'
import EditGroups from './editGroups'

class Group extends React.Component {
  constructor() {
    super()

    this.state = {
      createdBy: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.reRender = this.reRender.bind(this)

  }
  isOwner() {
    return Auth.isAuthenticated() && this.props.createdBy === Auth.getPayload().sub
  }
  handleDelete() {
    if (this.props.createdBy === Auth.getPayload().sub) {
      axios.delete(`/api/groups/${this.props._id}`,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(() => this.props.rerender())
        .catch(err => console.log(err.message))
    } else {
      console.log('not yours!')
    }
  }
  reRender() {
    const { edit } = this.state
    this.setState({ edit: !edit })
  }
  removeFromState(){
  }

  render() {
    if (this.state.edit) {
      return  <EditGroups  group={this.props}/>
    }
    return(
      <div className="column is-one-third">
        <div className="card-large box">
          <div className="card-header-title is-centered is-size-3">
            {this.props.name}
          </div>
          <hr />
          <div className="has-text-centered is-size-5">
            {this.props.description}
          </div>
          <div className="card-content">
            <CreateCategory groupId={this.props._id}>Create Category</CreateCategory>
          </div>
          <div>

          </div>
          <hr />
          <footer className="card-footer">
            <Link to={`/groups/${this.props._id}/tasks`} className="button is-link card-footer-item subtitle is-6 has-text-white">
              <strong className="has-text-white">Go to all Tasks</strong>
            </Link>
            {this.isOwner() && <button className="button is-warning subtitle is-6" onClick={this.reRender}><strong className="has-text-white">Edit</strong></button>}
            {this.isOwner() && <button className="button is-danger  subtitle is-6" onClick={this.handleDelete}><strong className="has-text-white">Delete</strong></button>}
          </footer>
        </div>
      </div>
    )
  }
}

export default Group

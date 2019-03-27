

import React from 'react'
import 'bulma'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'
import CreateCategory from '../categories1/createCategory.js'

const Group = ({ _id, name, author, content, url }) => {
  return (
    <div className="column is-one-third">
      <div className="card large">
        <div className="card-header">
          <div className="card-header-title is-centered is-size-3">
          {name}
        </div>
      </div>
      <div className="card-content">
        <CreateCategory groupId={_id}>Create Category</CreateCategory>
      </div>
      <div className="card-footer">
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item"><strong>Edit</strong></a>
        <a href="/groups" className="card-footer-item" ><strong>Delete</strong></a>
        <Link to={`/groups/${_id}/tasks`} className="card-footer-item">
          <strong>Tasks</strong>
        </Link>
      </footer>
    </div>
    </div>
  )
}

class Groups extends React.Component {
  constructor() {
    super()

    this.state = {
      groups: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    axios.delete(`/api/groups/${this.state.match.params.id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.state.history.push('/groups'))
      .catch(err => console.log(err.message))
  }
  componentDidMount() {
    this.getAllGroups()
    setInterval(() => this.getAllArticles(), 60000)
  }

  getAllGroups() {
    axios.get('/api/groups', {
    })
      .then(res => this.setState({ groups: res.data }))
  }

  isOwner() {
    return Auth.isAuthenticated() && this.state.createdBy === Auth.getPayload().sub
  }
  render() {
    const groups = this.state.groups
    return (
      <div>
        <div className="row columns is-multiline">
          {groups && groups.map((groups, i) => <Group key={i} {...this.state.groups[i]}/>)}
        </div>
      </div>
    )
  }
}

export default Groups

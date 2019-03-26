import React from 'react'
import 'bulma'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../../lib/auth'
import CreateCategory from '../categories1/createCategory.js'
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
    return this.state.createdBy === Auth.getPayload().sub
  }


  handleDelete() {
    axios
      .get(`/api/groups/${this.props._id}`)
      .then(res => {
        this.setState({createdBy: res.data.createdBy})
      })
      .catch(err => console.log(err.message))
    if (this.isOwner()) {
      axios.delete(`/api/groups/${this.props._id}`,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(() => this.props.history.push('/groups'))
        .catch(err => console.log(err.message))
    }
  }
  reRender() {
    const { edit } = this.state
    this.setState({ edit: !edit })
  }


  render() {
    console.log(this.state.edit)
    if (this.state.edit) {
      return <EditGroups />
    }
    console.log(this.state.createdBy, 'createdBy')
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
        </div>

        <footer className="card-footer">



          <button className="card-footer-item is-onethird" onClick={this.reRender}>Edit</button>

          <button className="card-footer-item is-onethird" onClick={this.handleDelete}>Delete</button>

          <Link to={`/groups/${this.props._id}/tasks`} className="card-footer-item is-onethird">
            <strong>Tasks</strong>
          </Link>

        </footer>
      </div>
    )
  }
}

export default Group

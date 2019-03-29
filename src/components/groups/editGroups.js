import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

class EditGroups extends React.Component {
  constructor(props) {
    super()

    this.state = {
      data: {
        name: props.group.name,
        description: props.group.description
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/groups/${this.props.group.id}`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.props.onFetchGroups()
        this.props.onCancel()
      })
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <div className="column is-one-third">
        <div className="card-large box">
          <div className="card-header-title is-centered is-size-3">
            {this.props.group.name}
          </div>
          <br />
          <div className="card-header-title is-centered is-size-5">
            <strong className="has-text-warning">Editing...</strong>
          </div>
          <div className="card-content">
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <label className="subtitle is-6">Update name</label>
                <input
                  className="input"
                  name="name"
                  placeholder="Group Name"
                  value={this.state.data.name}
                  onChange={this.handleChange}
                />
                <br />
                <label className="subtitle is-6">Assign Users</label>
                <div>
                </div>
                <label className="subtitle is-6">Update description</label>
                <input
                  className="input"
                  name="description"
                  placeholder="Group Details"
                  value={this.state.data.description}
                  onChange={this.handleChange}
                />
                <br />
              </form>
            </div>
          </div>
          <footer className="card-footer">
            <button href="/groups" className="button is-warning subtitle is-6 is-fullwidth" onClick={this.props.onCancel}><strong className="has-text-white">Cancel</strong></button>
            <button href="/groups" className="button is-primary subtitle is-6 is-fullwidth" onClick={this.handleSubmit}><strong className="has-text-white">Update</strong></button>
          </footer>
        </div>
      </div>
    )
  }
}

export default EditGroups

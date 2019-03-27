import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

class EditGroups extends React.Component {
  constructor() {
    super()

    this.state = { data: this.props }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  buttonClicker(e){
    e.preventDefault()
      .then(() => this.props.history.push('/groups'))
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
      .then(() => this.props.history.push('/groups'))
      .catch(err => console.log(err.message))
  }

  render() {
    console.log(this.props.group.id)
    return (
      <div className="column is-one-third">
        <div className="card-large box">
          <div className="card-header-title is-centered is-size-3">
            {this.props.group.name}
          </div>
          <div className="card-header-title is-centered is-size-5">
            <strong className="has-text-warning">Editing...</strong>
          </div>
          <hr />
          <div className="card-content">
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <label className="subtitle is-6">Update name</label>
                <input
                  className="input"
                  name="name"
                  placeholder="Group Name"
                  value={this.props.group.name || ''}
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
                  value={this.props.group.description || ''}
                  onChange={this.handleChange}
                />
                <br />
              </form>
            </div>
          </div>
          <footer className="card-footer">
            <button href="/groups" className="button is-warning subtitle is-6 is-fullwidth"><strong className="has-text-white">Cancel</strong></button>
            <button href="/groups" className="button is-primary subtitle is-6 is-fullwidth" onClick={this.handleSubmit}><strong className="has-text-white">Update</strong></button>
          </footer>
        </div>
      </div>
    )
  }
}

export default EditGroups

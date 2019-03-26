import React from 'react'
import axios from 'axios'

import Auth from '../../../lib/auth'
import CreateGroup from './createGroup'

class EditGroups extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   axios.get(`/api/groups/${this.props.match.params.groupId}`)
  //     .then(res => this.setState({ data: res.data }))
  //     .catch(err => console.log(err.message))
  // }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/groups/${this.props_id}`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/groups'))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title is-centered">
              Create New Group
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <form onSubmit={this.handleSubmit}>
                  <label className="label">Name</label>
                  <input
                    className="input"
                    name="name"
                    placeholder="Group Name"
                    value={this.state.data.name || ''}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  <label className="label">Assign Users</label>
                  <div>
                    <div>


                        </div>
                    </div>

                  <label className="label">Description</label>
                  <input
                    className="input"
                    name="description"
                    placeholder="Group Details"
                    value={this.state.data.description || ''}
                    onChange={this.handleChange}
                  />
                </form>
                <p>{this.props.usersAssigned}</p>
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="./groups" className="card-footer-item">Cancel</a>
              <a href="./groups" className="card-footer-item" onClick={this.handleSubmit}>Create</a>
            </footer>
          </div>
        </div>
      </main>
    )
  }
}

export default EditGroups

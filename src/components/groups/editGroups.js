import React from 'react'
import axios from 'axios'

import Auth from '../../../lib/auth'
import CreateGroup from './createGroup'

class EditGroups extends React.Component {
  constructor() {
    super()

    this.state = { data: this.props }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    console.log('123', this.state)
    // const props = this.props
    // const data = {...this.state.data, props}
    // this.setState({ data })

  }

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
    console.log('current state', this.state)
    return (
      <main className="section">
        <div className="container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title is-centered">
                Edit {this.props.group.name}
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
                    value={this.props.group.name || ''}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  <label className="label">Assign Users</label>
                  <div>

                  </div>
                  <label className="label">Description</label>
                  <input
                    className="input"
                    name="description"
                    placeholder="Group Details"
                    value={this.props.group.description || ''}
                    onChange={this.handleChange}
                  />
                </form>
                <p>{this.props.group.usersAssigned}</p>
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <a href="./groups" className="card-footer-item">Cancel</a>
              <a href="./groups" className="card-footer-item" onClick={this.handleSubmit}>Edit</a>
            </footer>
          </div>
        </div>
      </main>
    )
  }
}

export default EditGroups

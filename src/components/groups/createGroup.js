import React from 'react'
import axios from 'axios'
import 'bulma'
import Auth from '../../../lib/auth'

class CreateGroup extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        description: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/groups',
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .catch(err => console.log(err.message))
  }


  handleDone(e){
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    return(
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
                value={this.state.data.name}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <label className="label">Users To Add</label>
              <label className="label">Description</label>
              <input
                className="input"
                name="description"
                placeholder="Group Details"
                value={this.state.data.description}
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
    )
  }
}

export default CreateGroup

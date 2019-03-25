import React from 'react'
import axios from 'axios'
import 'bulma'

class CreateGroup extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      description: '',
      email: '',
      usersAssigned: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ name: e.target.data, email: e.target.data, description: e.target.data})
  }

  handleDone(e){
    e.preventDefault()
    this.props.history.push('/')
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/api/groups', this.state.data)
    // then(res => res.data)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err.message))
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
                placeholder="Event name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <label className="label">Users To Add</label>
              <input
                className="input"
                name="email"
                placeholder="User email address"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <label className="label">Description</label>
              <input
                className="input"
                name="description"
                placeholder="Event details"
                value={this.state.description}
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

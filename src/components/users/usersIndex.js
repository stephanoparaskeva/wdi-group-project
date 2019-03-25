import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Users extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('/users')
      .then(users => this.setState({ users }))
  }

  render() {

    const users = this.state.users

    return(
      <div>
        {users.map(user =>
          <div key={user._id} className="card">
            <header className="card-header">
              <p className="card-header-title">
                {user.username}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <p>{user.email}</p>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Edit</a>
              <a href="#" className="card-footer-item">Delete</a>
            </footer>
          </div>)}
      </div>
    )
  }
}

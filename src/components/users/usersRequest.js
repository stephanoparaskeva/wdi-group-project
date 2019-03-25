import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../../lib/auth'

class Users extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .post(`/api/users/${this.props.match.params.userId}/request`, this.state.data, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(users => this.setState({ users }))
  }

  render() {

    const users = this.state.users.data

    return(
      <div>
        {users && users.map(user =>
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
              <Link to={`/users/${user._id}`}>Request</Link>
              <a href="#" className="card-footer-item">Delete</a>
            </footer>
          </div>)}
      </div>
    )
  }
}

export default Users

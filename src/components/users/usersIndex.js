import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/auth'

class Users extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/users', {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(users => this.setState({ users }))
  }

  render() {
    const users = this.state.users.data
    return(
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            {users && users.map(user =>
              <div key={user._id} className="column is-one-third">
                <div className="card-large box">
                  <div className="card-header-title is-centered is-size-3">
                  Friend?
                  </div>
                  <hr />
                  <div className="card-content">
                    <div className="content">
                      <p><strong>Name: </strong>{user.name}</p>
                      <p><strong>Email Address: </strong>{user.email}</p>
                      <p><strong>Username: </strong>{user.username}</p>
                    </div>
                    <hr />
                    <p><strong>Created Date: </strong>{user.createdAt}</p>
                    <p><strong>User ID: </strong>{user._id}</p>
                    <hr />
                    <footer className="card-footer">
                      <Link className="button is-primary subtitle is-6 is-fullwidth" to={`/users/${user._id}`}>Request</Link>
                    </footer>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Users

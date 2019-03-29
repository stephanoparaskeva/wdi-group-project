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
      <nav className="panel">
        <p className="panel-heading">
          Find Friends
        </p>
        <div  className="panel-block">
          <p className="control has-icons-left">
            <span className="icon is-small is-left">
            </span>
          </p>
        </div>
        {users && users.map(user =>
          <a key={user._id} className="panel-block is-active">
            <span className="panel-icon">
              <i className="fas fa-user" aria-hidden="true"></i>
            </span>
            <p><strong>{`${user.username} `}<br/></strong></p>
            <p>{` ${user.email} `}<br/></p>
            <Link to={`/users/${user._id}`}>Request</Link>
          </a>
        )}
        <div className="panel-block">
        </div>
      </nav>

    )
  }
}

export default Users

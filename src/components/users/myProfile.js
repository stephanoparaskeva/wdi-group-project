import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

import UsersIndex from './usersIndex'

class Users extends React.Component {
  constructor() {
    super()

    this.state = {
      user: {},
      pending: [],
      accepted: [],
      tasks: []
    }

    this.filterTasks = this.filterTasks.bind(this)
  }

  filterTasks() {
    return this.state.tasks.data.filter(task => task.createdBy === Auth.getPayload().sub)
  }

  componentDidMount() {
    axios
      .get(`/api/users/${Auth.getPayload().sub}`, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(user => this.setState({ user }))
    axios
      .get('/api/groups/5c9932da6c66107990de9029/tasks')
      .then(tasks => this.setState({ tasks }))
    axios
      .post('/api/users/pending', this.state.user, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(pending => this.setState({ pending }))
    axios
      .post('/api/users/accepted', this.state.user, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(accepted => this.setState({ accepted }))
  }

  render() {
    const user = this.state.user.data
    const pending = this.state.pending.data
    const accepted = this.state.accepted.data
    return(
      <div className="container">
        <div className="section">
          <div className="rows is-multiline">
            {user &&
          <div className="is-one-third">
            <div >
              <div className="card-header-title is-centered is-size-3">
                Me
              </div>
              <hr />
              <div className="card-content">
                <div className="content">
                  <p><strong>Username: </strong>{user.username}</p>
                  <p><strong>Email Address: </strong>{user.email}</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
            }
            <nav className="panel">
              <p className="panel-heading">
                Friend Requests
              </p>
              <div  className="panel-block">
                <p className="control has-icons-left">
                  <span className="icon is-small is-left">
                  </span>
                </p>
              </div>
              {pending && pending.map(user => (
                <a key={user.friend._id} className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </span>
                  <p><strong>{`${user.friend.username} `}<br/></strong></p>
                  <p>{` ${user.friend.email} `}<br/></p>
                  <Link to={`/users/${user._id}`}>add</Link>
                </a>
              ))}
              <div className="panel-block">
              </div>
            </nav>
            <nav className="panel">
              <p className="panel-heading">
                Friends
              </p>
              <div  className="panel-block">
                <p className="control has-icons-left">
                  <span className="icon is-small is-left">
                  </span>
                </p>
              </div>
              {accepted && accepted.map(user => (
                <a key={user.friend._id} className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </span>
                  <p><strong>{`${user.friend.username} `}<br/></strong></p>
                  <p>{` ${user.friend.email} `}<br/></p>
                </a>
              ))}
              <div className="panel-block">
              </div>
            </nav>
            <UsersIndex />
          </div>
        </div>

      </div>

    )
  }
}



export default Users

import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

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
    const tasks = this.state.tasks.data
    return(
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            {user &&
          <div className="column is-one-third">
            <div className="card-large box">
              <div className="card-header-title is-centered is-size-3">
                Your Profile
              </div>
              <hr />
              <div className="card-content">
                <div className="content">
                  <p><strong>Name: </strong>{user.name}</p>
                  <p><strong>Email Address: </strong>{user.email}</p>
                  <p><strong>Username: </strong>{user.username}</p>
                  <p><strong>Newsletter: </strong>{user.newsletter}</p>
                </div>
                <hr />
                <p><strong>Created Date: </strong>{user.createdAt}</p>
                <p><strong>User ID: </strong>{user._id}</p>
              </div>
            </div>
          </div>
            }
            {pending && pending.map(user => (
              <div key={user.friend._id} className="column is-one-third">
                <div className="card-large box">
                  <div className="card-header-title is-centered is-size-3">
                  Pending friend
                  </div>
                  <hr />
                  <div className="card-content">
                    <div className="content">
                      <p><strong>Name: </strong>{user.friend.name}</p>
                      <p><strong>Email Address: </strong>{user.friend.email}</p>
                      <p><strong>Username: </strong>{user.friend.username}</p>
                      <p><strong>Newsletter: </strong>{user.friend.newsletter}</p>
                    </div>
                    <hr />
                    <p><strong>Created Date: </strong>{user.friend.createdAt}</p>
                    <p><strong>User ID: </strong>{user.friend._id}</p>
                    <Link to={`/users/${user._id}`}>Add</Link>
                  </div>
                </div>
              </div>
            ))}
            {accepted && accepted.map(user => (
              <div key={user.friend._id} className="column is-one-third">
                <div className="card-large box">
                  <div className="card-header-title is-centered is-size-3">
                  Accepted friend
                  </div>
                  <hr />
                  <div className="card-content">
                    <div className="content">
                      <p><strong>Name: </strong>{user.friend.name}</p>
                      <p><strong>Email Address: </strong>{user.friend.email}</p>
                      <p><strong>Username: </strong>{user.friend.username}</p>
                      <p><strong>Newsletter: </strong>{user.friend.newsletter}</p>
                    </div>
                    <hr />
                    <p><strong>Created Date: </strong>{user.friend.createdAt}</p>
                    <p><strong>User ID: </strong>{user.friend._id}</p>
                  </div>
                </div>
              </div>
            ))}
            {tasks && this.filterTasks().map(task => (
              <div key={task._id} className="column is-one-third">
                <div className="card-large box">
                  <div className="card-header-title is-centered is-size-3">
                    {task.name}
                  </div>
                  <hr />
                  <div className="has-text-centered is-size-5">
                    {task.description}
                  </div>
                  <br />
                  <p>{`Created by (Id): ${task.createdBy}`}</p>
                  <p>{`Priority: ${task.priority}`}</p>
                  <hr />
                  <footer className="card-footer">
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Users

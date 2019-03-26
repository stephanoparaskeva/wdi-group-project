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
        description: '',
        usersAssigned: [{ _id: Auth.getPayload().sub }]
      },
      accepted: [],
      stateChange: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.assignUsers = this.assignUsers.bind(this)
  }

  componentDidMount() {
    axios
      .post('/api/users/accepted', this.state.user, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(accepted => this.setState({ accepted }))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  assignUsers(value) {
    const data = {...this.state.data, usersAssigned: [...this.state.data.usersAssigned, {_id: value}]}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data.name, 'state')
    axios.post('/api/groups',
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.rerender())
      .catch(err => console.log(err.message))

  }

  render() {
    console.log(this.state.data.name)
    const accepted = this.state.accepted.data
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
                value={this.state.data.name || ''}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <label className="label">Assign Users</label>
              <div>
                <div>
                  {accepted && accepted.map((user, i) => (
                    <div  key={i}>
                      <a
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault()
                          this.assignUsers(user._id)
                        }}
                      >{user.friend.username}
                      </a>
                    </div>
                  ))}
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
    )
  }
}




export default CreateGroup

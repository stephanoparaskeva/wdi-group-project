import React from 'react'
import axios from 'axios'
import 'bulma'
import Auth from '../../lib/auth'

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
    axios.post('/api/groups',
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.props.onFetchGroups()
      })
      .catch(err => console.log(err.message))

  }

  render() {
    const accepted = this.state.accepted.data
    return(
      <div className="column is-one-third">
        <div className="card-large box">
          <div className="card-header-title is-centered is-size-3">
          Create New Group
          </div>
          <hr />
          <div className="card-content">
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <label className="subtitle is-6"><strong>Name</strong></label>
                <input
                  className="input"
                  name="name"
                  placeholder="Group Name"
                  value={this.state.data.name || ''}
                  onChange={this.handleChange}
                />
                <label className="subtitle is-6"><strong>Assign Users</strong></label>
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
                <label className="subtitle is-6"><strong>Description</strong></label>
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
            <button href="/groups" className="button is-warning subtitle is-6 is-fullwidth"><strong className="has-text-white">Cancel</strong></button>
            <button href="/groups" className="button is-primary subtitle is-6 is-fullwidth" onClick={this.handleSubmit}><strong className="has-text-white">Create</strong></button>
          </footer>
        </div>
      </div>
    )
  }
}

export default CreateGroup

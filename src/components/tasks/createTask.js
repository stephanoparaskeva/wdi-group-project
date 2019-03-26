import React from 'react'
import 'bulma'
import axios from 'axios'
import Auth from '../../../lib/auth'

class CreateTask extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        description: '',
        priority: '',
        categoryAssigned: {},
        usersAssigned: [{ _id: Auth.getPayload().sub }]
      },
      accepted: [],
      priorityMenu: '',
      categoryMenu: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.togglePriorityClick = this.togglePriorityClick.bind(this)
    this.assignPriority = this.assignPriority.bind(this)
    this.toggleCategoryClick = this.toggleCategoryClick.bind(this)
    this.assignCategory = this.assignCategory.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios.post(`/api/groups/${this.props.match.params.groupId}/tasks`, this.state.data, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {

        this.props.history.push(`/groups/${this.props.match.params.groupId}/tasks`)
        this.props.onFetchTasks()
        this.props.handleClick()
      })
      .catch(err => console.log(err.message))
  }

  togglePriorityClick() {
    if (this.state.priorityMenu === '') {
      this.setState({ priorityMenu: 'is-active' })
    } else {
      this.setState({ priorityMenu: '' })
    }
  }

  assignPriority(value) {
    const data = {...this.state.data, priority: value }
    this.togglePriorityClick()
    this.setState({ data })
  }

  toggleCategoryClick() {
    if (this.state.categoryMenu === '') {
      this.setState({ categoryMenu: 'is-active' })
    } else {
      this.setState({ categoryMenu: '' })
    }
  }

  assignCategory(value) {
    const data = {...this.state.data, categoryAssigned: value }
    this.toggleCategoryClick()
    this.setState({ data })
  }

  render() {
    const accepted = this.state.accepted
    console.log(accepted, 'accepted')
    return(
      <div className="card">
        <form>
          <header className="card-header">
            <p className="card-header-title">
              <input
                className="input"
                name="name"
                placeholder="Task Name"
                value={this.state.data.name}
                onChange={this.handleChange}
              />
            </p>
          </header>
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
          <div className="card-content">
            <div className="content">
              <p>{this.props.description}</p>
              <br />
              <p>Priority:</p>
              <div className={`dropdown ${this.state.priorityMenu}`}>
                <div className="dropdown-trigger">
                  <button type="button" className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.togglePriorityClick}>
                    <span>{this.state.data.priority || 'Choose'}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        this.assignPriority('high')
                      }}
                    >
                      High
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        this.assignPriority('medium')
                      }}
                    >
                      Medium
                    </a>
                    <a
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        this.assignPriority('low')
                      }}
                    >
                      Low
                    </a>
                  </div>
                </div>
              </div>

              <p>Catgeory:</p>
              <div className={`dropdown ${this.state.categoryMenu}`}>
                <div className="dropdown-trigger">
                  <button type="button" className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.toggleCategoryClick}>
                    <span>{this.state.data.categoryAssigned.name || 'Choose'}</span>
                    <span>{this.state.categoryAssigned || 'Choose'}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <a
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault()
                        this.assignCategory(["5c9932da6c66107990de9029"])
                      }}
                    >
                      Category 1
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item" onClick={this.handleSubmit}>Create</a>
          </footer>
        </form>
      </div>
    )
  }
}

export default CreateTask

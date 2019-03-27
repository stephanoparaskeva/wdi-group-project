import React from 'react'
import 'bulma'
import axios from 'axios'
import Auth from '../../lib/auth'

class TaskIndexEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      edit: false,
      data: {
        name: '',
        description: '',
        priority: '',
        categoryAssigned: '',
        error: ''
      },

      priorityMenu: '',
      categoryMenu: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.togglePriorityClick = this.togglePriorityClick.bind(this)
    this.assignPriority = this.assignPriority.bind(this)
    this.toggleCategoryClick = this.toggleCategoryClick.bind(this)
    this.assignCategory = this.assignCategory.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/groups/${this.props.group}/tasks/${this.props._id}`, this.state.data, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        this.props.onFetchTasks()
        this.handleClick()
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
    this.setState({ data: { ...this.state.data, priority: value }})
    this.togglePriorityClick()
    console.log('priority: ' + value)
  }

  toggleCategoryClick() {
    if (this.state.categoryMenu === '') {
      this.setState({ categoryMenu: 'is-active' })
    } else {
      this.setState({ categoryMenu: '' })
    }
  }

  assignCategory(value) {
    this.setState({ data: { ...this.state.data, categoryAssigned: value }})
    this.toggleCategoryClick()
    console.log('categoryAssigned: ' + value)
  }

  handleClick() {
    const { edit } = this.state
    this.setState({ edit: !edit })
  }

  render() {
    if (this.state.edit) {
      return(
        <div className="card">
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
          <div className="card-content">
            <div className="content">
              <p className="card-header-title">
                <h2>Description</h2>
                <input
                  className="input"
                  name="description"
                  placeholder="Description"
                  value={this.state.data.description}
                  onChange={this.handleChange}
                />
              </p>
              <br />
              <div className={`dropdown ${this.state.priorityMenu}`}>
                <div className="dropdown-trigger">
                  <h2>Priority</h2>
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
                    <span>{this.state.data.categoryAssigned || 'Choose'}</span>
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
                        this.assignCategory(['5c9932da6c66107990de9029'])
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
            <a className="card-footer-item" name="edit" onClick={this.handleSubmit}>Save</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
      )
    }

    return(
      <div className="column is-one-third">
        <div className="card-large box">
          <div className="card-header-title is-centered is-size-3">
            {this.props.name}
          </div>
          <hr />
          <div className="has-text-centered is-size-5">
            {this.props.description}
          </div>
          <br />
          <p>{`Created by (Id): ${this.props.createdBy}`}</p>
          <p>{`Priority: ${this.props.priority}`}</p>
          <p>{`Catgeory: ${this.props.categoryAssigned}`}</p>
          <p><strong>Last comment:</strong></p>
          {this.props.comments > 0 && (
            <div>
              <p className="is-italic">Title: {this.props.comments[0].name}</p>
              <p className="is-italic">Comment: {this.props.comments[0].description}</p>
              <p className="is-italic">CreatedBy: {this.props.comments[0].createdBy}</p>
              <p className="is-italic">CreatedBy: {this.props.comments[0].createdAt}</p>
            </div>
          )}
          <hr />
          <footer className="card-footer">
            <button className="button is-warning subtitle is-6 is-fullwidth" onClick={this.handleClick}>Edit</button>
            <button className="button is-danger  subtitle is-6 is-fullwidth">Delete</button>
          </footer>
        </div>
      </div>

    )
  }
}

export default TaskIndexEdit

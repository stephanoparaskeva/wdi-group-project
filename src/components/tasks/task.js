import React from 'react'
import 'bulma'
import axios from 'axios'
import Auth from '../../../lib/auth'

class Task extends React.Component {
  constructor() {
    super()

    this.state = {
      edit: false,
      data: {
        name: '',
        description: '',
        priority: '',
        category: '',
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
    axios.put(`/api/groups/${this.props.match.params.groupId}/tasks/${this.props.match.params.taskId}`, this.state.data, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        this.props.history.push(`/groups/${this.props.match.params.groupId}/tasks/${this.props.match.params.taskId}`)
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
    this.setState({priority: value})
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
    this.setState({category: value})
    this.toggleCategoryClick()
    console.log('catgeory: ' + value)
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
              <input type="text" value={this.props.name} />
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <p>{this.props.description}</p>
              <br />
              <p>Created by: Jess</p>
              <p>Priority</p>
              <div className={`dropdown ${this.state.priorityMenu}`}>
                <div className="dropdown-trigger">
                  <button type="button" className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.togglePriorityClick}>
                    <span>{this.state.priority || 'Choose'}</span>
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
                    <span>{this.state.category || 'Choose'}</span>
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
                        this.assignCategory('category 1')
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
            <a className="card-footer-item" name="edit" onClick={this.handleClick}>Save</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
      )
    }

    return(
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {this.props.name}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>{this.props.description}</p>
            <br />
            <p>Created by: Jess</p>
            <p>{`Priority: ${this.props.priority}`}</p>
            <p>{`Catgeory: ${this.props.category}`}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item" name="edit" onClick={this.handleClick}>Edit</a>
          <a href="#" className="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }
}

export default Task

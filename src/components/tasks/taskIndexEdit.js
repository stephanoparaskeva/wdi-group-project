import React from 'react'
import 'bulma'
import axios from 'axios'
import Auth from '../../lib/auth'

class TaskIndexEdit extends React.Component {
  constructor(props) {
    super()

    this.state = {
      edit: false,
      data: {
        name: props.name,
        description: props.description,
        priority: props.priority,
        categoryAssigned: props.categoryAssigned,
        isCurrent: props.isCurrent,
        error: ''
      },

      priorityMenu: '',
      categoryMenu: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.togglePriorityClick = this.togglePriorityClick.bind(this)
    this.assignPriority = this.assignPriority.bind(this)
    this.toggleCategoryClick = this.toggleCategoryClick.bind(this)
    this.assignCategory = this.assignCategory.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDone = this.handleDone.bind(this)
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

  handleDone() {
    axios.put(`/api/groups/${this.props.group}/tasks/${this.props._id}`, { ...this.state.data, isCurrent: !this.state.data.isCurrent }, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        this.props.onFetchTasks()
        this.setState({ data: { ...this.state.data, isCurrent: !this.state.data.isCurrent }})
      })
      .catch(err => console.log(err.message))
  }

  handleDelete(e) {
    e.preventDefault()
    axios.delete(`/api/groups/${this.props.group}/tasks/${this.props._id}`, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        this.props.onFetchTasks()
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
  }

  handleClick() {
    const { edit } = this.state
    this.setState({ edit: !edit })
  }

  render() {
    console.log(this.props, 'props')
    if (this.state.edit) {
      const categoryAssigned = this.props.categories.filter(category => category._id === this.state.data.categoryAssigned)
      const categoryName = categoryAssigned.length > 0 ? categoryAssigned[0].name : 'Choose'
      return(
        <div className="column is-one-third">
          <div className="card-large box">
            <form>
              <div className="edit card-header-title is-centered is-size-3">
                <input
                  className="edit input card-header-title is-centered is-size-3"
                  name="name"
                  placeholder="Task Name"
                  value={this.state.data.name}
                  onChange={this.handleChange}
                />
              </div>
              <hr/>
              <p><strong>Description</strong></p>
              <input
                className="input"
                name="description"
                placeholder="Description"
                value={this.state.data.description}
                onChange={this.handleChange}
              />
              <div className={`dropdown ${this.state.priorityMenu}`}>
                <div className="dropdown-trigger">
                  <p><strong>Priority</strong></p>
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

              <p><strong>Category:</strong></p>
              <div className={`dropdown ${this.state.categoryMenu}`}>
                <div className="dropdown-trigger">
                  <button type="button" className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.toggleCategoryClick}>
                    <span>{categoryName}</span>
                    <span className="icon is-small">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    {this.props.categories.map(category =>
                      <a
                        key={category._id}
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault()
                          this.assignCategory(category._id)
                        }}
                      >
                        {category.name}
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <footer className="card-footer">
                <button type="button" className="button is-danger subtitle is-6 is-fullwidth" onClick={this.handleClick}>Cancel</button>
                <button type="button" className="button is-primary subtitle is-6 is-fullwidth" onClick={this.handleSubmit}>Update</button>
              </footer>
            </form>
          </div>
        </div>
      )
    }

    const categoryAssigned = this.props.categories.filter(category => category._id === this.props.categoryAssigned)
    const categoryName = categoryAssigned.length > 0 ? categoryAssigned[0].name : 'choose'

    return(
      <div className="column is-one-third">
        <div className="card-large box">
          {!this.props.isCurrent && <div className="has-text-centered"><i className="fas fa-check done-tick"></i></div>}
          <div className="card-header-title is-centered is-size-3">
            {this.props.name}
          </div>
          <hr />
          <div className="has-text-centered is-size-5">
            {this.props.description}
          </div>
          <br />
          <p><strong>Priority:</strong> {`${this.props.priority}`}</p>
          <p><strong>Category:</strong>{`${categoryName}`}</p>
          <hr />
          <footer className="card-footer">
            <button className="button is-warning subtitle is-6 is-fullwidth" onClick={this.handleClick}>Edit</button>
            <button className="button is-danger subtitle is-6 is-fullwidth" name="delete" onClick={this.handleDelete}>Delete</button>
            <button className="button is-info subtitle is-6 is-fullwidth" name="done" onClick={this.handleDone}>Done</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default TaskIndexEdit

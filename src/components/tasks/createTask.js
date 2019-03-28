import React from 'react'
import 'bulma'
import axios from 'axios'
import Auth from '../../lib/auth'

class CreateTask extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        description: '',
        priority: '',
        categoryAssigned: null,
        usersAssigned: [{ _id: Auth.getPayload().sub }],
        isCurrent: true
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
    axios.post(`/api/groups/${this.props.match.params.groupId}/tasks`, this.state.data, {
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

  // categoryAssigned: filters the prop "categories" sent down from tasks. It then checks that the Id matches the state of
  //   categoryAssigned (which is the category id assigned) which is set when a user clicks a category in the drop down and
  //   returns an aray of that category if so.

  //categoryName: checks that the length of the array is larger than zero to make sure we can get something. If so, we set
  //    categoryName as the name of the first item in the category assigned array OR we display 'Choose'

  render() {
    const categoryAssigned = this.props.categories.filter(category => category._id === this.state.data.categoryAssigned)
    const categoryName = categoryAssigned.length > 0 ? categoryAssigned[0].name : 'Choose'
    return(
      <div className="column is-one-third">
        <div className="card-large box">
          <form>
            <div className="card-header-title is-centered is-size-3">
              <input
                className="input card-header-title is-centered is-size-3"
                name="name"
                placeholder="Task Name"
                value={this.state.data.name}
                onChange={this.handleChange}
              />
            </div>
            <hr / >
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

            <p><strong>Category</strong></p>
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
            <br />
            <br />
            <footer className="card-footer">
              <button href="/groups/{this.props.match.params.groupId}" className="button is-warning subtitle is-6 is-fullwidth"><strong className="has-text-white">Cancel</strong></button>
              <button className="button is-primary subtitle is-6 is-fullwidth" onClick={this.handleSubmit}>Create</button>
            </footer>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateTask

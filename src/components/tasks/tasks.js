import React, {Fragment} from 'react'
import 'bulma'
import axios from 'axios'
import TaskIndexEdit from './taskIndexEdit'
import CreateTask from './createTask'
import Auth from '../../lib/auth'

class Tasks extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      accepted: [],
      categories: []
    }

    this.filterTask = this.filterTask.bind(this)
    this.filterCategories = this.filterCategories.bind(this)
    this.fetchTasks = this.fetchTasks.bind(this)
    this.fetchCategories = this.fetchCategories.bind(this)
    this.fetchGroups = this.fetchGroups.bind(this)
    this.getFriends = this.getFriends.bind(this)
  }

  getFriends() {
    axios
      .post('/api/users/accepted', this.state.user, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(accepted => this.setState({ accepted }))
  }

  fetchCategories() {
    axios
      .get(`/api/groups/${this.props.match.params.groupId}/categories`)
      .then(res => this.setState({ categories: res.data }))
  }

  fetchGroups() {
    axios
      .get(`/api/groups/${this.props.match.params.groupId}`)
      .then(res => this.setState({ group: res.data.name }))
  }

  componentDidMount() {
    this.fetchTasks()
    this.getFriends()
    this.fetchCategories()
  }

  fetchTasks() {
    axios.get(`/api/groups/${this.props.match.params.groupId}/tasks`, {
    })
      .then(res => this.setState({ tasks: res.data }))
  }

  filterTask() {
    return this.state.tasks
      .filter(task => task.group === this.props.match.params.groupId)
      .filter(task => {
        if (!this.state.selectedCategory) return true
        console.log(task)
        return this.state.selectedCategory === task.categoryAssigned
      })
      .filter(task => {
        if (!this.state.selectedPriority) return true
        return this.state.selectedPriority === task.priority
      })
  }

  filterCategories() {
    return this.state.categories.filter(category => category.group === this.props.match.params.groupId)
  }

  render() {
    if(!this.state.tasks) return null
    const categoryAssigned = this.state.categories.filter(category => category._id === this.state.selectedCategory)
    const categoryName = categoryAssigned.length > 0 ? categoryAssigned[0].name : 'All Categories'
    console.log(this.state.group, 'group')
    return(
      <Fragment>
        <nav className="navbar is-warning tasks-nav">
          <div className="container">
            <div className="navbar-item">
              <h2><b> Filter by: </b></h2>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                {categoryName}
              </a>
              <div className="navbar-dropdown">
                <a
                  onClick={() => this.setState({ selectedCategory: null })}
                  className="navbar-item">
                  All Categories
                </a>
                {this.filterCategories().map(category =>
                  <a
                    onClick={() => this.setState({ selectedCategory: category._id, selectedPriority: null })}
                    key={category._id}
                    className="navbar-item">
                    {category.name}
                  </a>
                )}
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                {this.state.selectedPriority || 'All Priorities'}
              </a>
              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  onClick={() => this.setState({ selectedPriority: null })}
                >
                  All Priorities
                </a>
                <a
                  className="navbar-item"
                  onClick={() => this.setState({ selectedPriority: 'high', selectedCategory: null })}
                >
                  High
                </a>
                <a
                  className="navbar-item"
                  onClick={() => this.setState({ selectedPriority: 'medium', selectedCategory: null })}>
                  Medium
                </a>
                <a
                  className="navbar-item"
                  onClick={() => this.setState({ selectedPriority: 'low', selectedCategory: null })}
                >
                  Low
                </a>
              </div>
            </div>
          </div>
        </nav>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="title">
                <i className="fas fa-tasks"></i>
                <div>
                Tasks
                </div>
              </div>
              <h2 className="subtitle">
                {this.state.selectedPriority || categoryName}
              </h2>

            </div>
          </div>
        </section>
        <div className="container">
          <div className="section">
            <div className="columns is-multiline">
              <CreateTask {...this.props} onFetchTasks={this.fetchTasks} categories={this.filterCategories()} />
              {this.filterTask().map(task => <TaskIndexEdit {...task} categories={this.filterCategories()} key={task._id} onFetchTasks={this.fetchTasks} /> )}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Tasks

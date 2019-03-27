import React from 'react'
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

  componentDidMount() {
    console.log(this.props)
    this.fetchTasks()
    this.getFriends()
    this.fetchCategories()
  }

  fetchTasks() {
    console.log('runs')
    axios.get(`/api/groups/${this.props.match.params.groupId}/tasks`, {
    })
      .then(res => this.setState({ tasks: res.data }))
  }

  filterTask() {
    console.log(this.state.tasks, 'tasks')
    return this.state.tasks.filter(task => task.group === this.props.match.params.groupId)
  }

  filterCategories() {
    console.log(this.state.categories, 'categories')
    return this.state.categories.filter(category => category.group === this.props.match.params.groupId)
  }

  render() {
    console.log(this.state.tasks, 'tasks')
    if(!this.state.tasks) return null
    console.log(this.props, 'props')
    return(
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            {this.filterTask().map(task => <TaskIndexEdit {...task} categories={this.filterCategories()} key={task._id} onFetchTasks={this.fetchTasks} /> )}
            <CreateTask {...this.props} onFetchTasks={this.fetchTasks} categories={this.filterCategories()} />
          </div>
        </div>
      </div>
    )
  }
}

export default Tasks

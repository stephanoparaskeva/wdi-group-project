import React from 'react'
import 'bulma'
import axios from 'axios'
import Task from './task'
import CreateTask from './createTask'
import Auth from '../../../lib/auth'

class Tasks extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      accepted: []
    }

    this.filterTask = this.filterTask.bind(this)
    this.fetchTasks = this.fetchTasks.bind(this)
    this.getFriends = this.getFriends.bind(this)
  }

  getFriends() {
    axios
      .post('/api/users/accepted', this.state.user, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(accepted => this.setState({ accepted }))
  }
  
  componentDidMount() {
    console.log(this.props)
    this.fetchTasks()
    this.getFriends()
  }

  fetchTasks() {
    axios.get(`/api/groups/${this.props.match.params.groupId}/tasks`, {
    })
      .then(res => console.log(res.data))
  }

  filterTask() {
    console.log(this.state.tasks, 'tasks')
    return this.state.tasks.filter(task => task.group === this.props.match.params.groupId)
  }

  render() {
    console.log(this.state.tasks, 'tasks')
    if(!this.state.tasks) return null
    console.log(this.state.tasks)
    return(
      <div>
        {this.filterTask().map(task =>
          <Task {...task} key={task._id} />
        )}
        <CreateTask {...this.props} onFetchTasks={this.fetchTasks} />
      </div>
    )
  }
}

export default Tasks

import React from 'react'
import 'bulma'
import axios from 'axios'
import Task from './task'
import CreateTask from './createTask'

class Tasks extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.filterTask = this.filterTask.bind(this)
    this.fetchTasks = this.fetchTasks.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
    this.fetchTasks()
  }

  fetchTasks() {
    axios.get(`/api/groups/${this.props.match.params.groupId}/tasks`, {
    })
      .then(res => this.setState({ tasks: res.data }))
  }

  filterTask() {
    console.log(this.state.tasks)
    return this.state.tasks.filter(task => task.group === this.props.match.params.groupId)
  }

  render() {
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

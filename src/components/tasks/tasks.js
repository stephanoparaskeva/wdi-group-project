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
  }

  componentDidUpdate() {
    console.log(this.props)
    axios.get(`/api/groups/${this.props.match.params.groupId}/tasks`, {
    })
      .then(res => this.setState({ tasks: res.data }))
  }

  filterTask() {
    return this.state.tasks.filter(task => task.group === this.props.match.params.groupId)
  }


  render() {
    if(!this.state.tasks) return null
    return(
      <div>
        {this.filterTask().map(task =>
          <Task {...task} key={task._id} />
        )}
        <CreateTask {...this.props}/>
      </div>
    )
  }
}

export default Tasks

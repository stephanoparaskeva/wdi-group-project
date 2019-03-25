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

  componentDidMount() {
    console.log(this.props)
    axios.get(`/api/groups/${this.props.match.params.groupId}/tasks`, {
    })
      .then(res => this.setState({ tasks: res.data }))
  }


  render() {
    if(!this.state.tasks) return null
    return(
      <div>
        {this.state.tasks.map(task =>
          <Task {...task} key={task._id} />
        )}
        <CreateTask {...this.props}/>
      </div>
    )
  }
}

export default Tasks

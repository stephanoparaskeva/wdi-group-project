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
    axios.get(`/api/groups/5c94ee80a01cb43716fdd397/tasks`, {
      // headers: {
      //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Yzk2NWUxMDIwNDI5NTE1MDA4MDIxNmUiLCJpYXQiOjE1NTMzNTg0MjcsImV4cCI6MTU1MzM4MDAyN30.JBj3mh79ccmcNZ9RaDEw3jG6TlwTyqIsh_38BIfBwMk'
      // }
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
        <CreateTask />
      </div>
    )
  }
}

export default Tasks

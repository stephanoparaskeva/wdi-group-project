import React from 'react'
import 'bulma'
import axios from 'axios'

class Task extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get('/api/groups/5c94ee80a01cb43716fdd397/tasks', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Yzk2NWUxMDIwNDI5NTE1MDA4MDIxNmUiLCJpYXQiOjE1NTMzNTg0MjcsImV4cCI6MTU1MzM4MDAyN30.JBj3mh79ccmcNZ9RaDEw3jG6TlwTyqIsh_38BIfBwMk'
      }})
      .then(res => this.setState({ tasks: res.data }))
  }


  render() {
    if(!this.state.tasks) return null
    return(
      <div>
        {this.state.tasks.map(task =>
          <div key={task._id} className="card">
            <header className="card-header">
              <p className="card-header-title">
                {task.name}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <p>{task.description}</p>
                <br />
                <p>Created by: Jess</p>
                <p>{`Priority: ${task.priority}`}</p>
                <p>{`Catgeory: ${task.category}`}</p>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Edit</a>
              <a href="#" className="card-footer-item">Delete</a>
            </footer>
          </div>
        )}
      </div>
    )
  }
}

export default Task

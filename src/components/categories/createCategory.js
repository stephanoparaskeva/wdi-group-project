import React from 'react'
import axios from 'axios'
import 'bulma'

import Auth from '../../lib/auth'

class CreateCategory extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: ''
        // usersAssigned: [{ _id: Auth.getPayload().sub }]
      },
      accepted: [],
      categories: [],
      tasks: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getTasksForGroup = this.getTasksForGroup.bind(this)
    this.getAllCategoriesForUpdate = this.getAllCategoriesForUpdate.bind(this)
    // this.assignUsers = this.assignUsers.bind(this)
  }

  getAllCategoriesForUpdate() {
    axios.get(`/api/groups/${this.props.groupId}/categories`, {
    })
      .then(categories => {
        if(categories.data.length !== this.state.categories.data.length) {
          this.setState({ categories })
        }
      })
  }

  getTasksForGroup() {
    axios.get(`/api/groups/${this.props.groupId}/tasks`, {
    })
      .then(res => this.setState({ tasks: res.data }))
  }

  componentDidMount() {
    axios
      .get(`/api/groups/${this.props.groupId}/categories`)
      .then(categories => this.setState({ categories }))
    this.getTasksForGroup()
  }

  componentDidUpdate() {
    this.getAllCategoriesForUpdate()
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  // assignUsers(value) {
  //   const usersAssigned = [...this.state.data.usersAssigned, {_id: value}]
  //   this.setState({ data: {usersAssigned} })
  //   console.log(this.state.data.usersAssigned)
  // }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(`/api/groups/${this.props.groupId}/categories`, this.state.data, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        this.setState(this.state)
      })
      .catch(err => console.log(err.message))
  }

  filterCategory() {
    return this.state.categories.data.filter(category => category.group === this.props.groupId)
  }
  filterTasks() {
    return this.state.tasks.filter(task => task.group === this.props.groupId)
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="label">Add an extra category</label>
          <input
            className="input"
            name="name"
            placeholder="Name"
            value={this.state.data.name}
            onChange={this.handleChange}
          />
          <button href="./groups" className="card-footer-item" onClick={this.handleSubmit}>create category</button>
        </form>
        {this.state.categories.data && this.filterCategory().map((category, i) => (
          <div key={i}>
            <p>{category.name}</p>

          </div>
        ))}
      </div>
    )
  }
}

// <div className="select">
//   <select>
//     { this.state.tasks && this.filterTasks().map((task, j) => (
//       <option key={j}>{task.name}</option>
//     ))}
//   </select>
// </div>




export default CreateCategory

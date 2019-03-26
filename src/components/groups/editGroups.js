import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import CreateGroup from './createGroup'

class EditGroups extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/groups${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.message))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/groups${this.props.match.params.id}`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/groups'))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <CreateGroup
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
          />
        </div>
      </main>
    )
  }
}

export default EditGroups

import React from 'react'
import axios from 'axios'
import Auth from '../../../lib/auth'

class Users extends React.Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .post(`/api/users/${this.props.match.params.userId}/request`, this.state.data, {
        headers: {Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/myProfile'))
  }

  render() {

    return(
      <div>
      </div>
    )
  }
}

export default Users

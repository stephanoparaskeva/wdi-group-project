import React from 'react'
import 'bulma'
import axios from 'axios'
import Group from './group'
import CreateGroup from './createGroup'

class Groups extends React.Component {
  constructor() {
    super()

    this.state = {
      groups: []
    }

    this.getAllGroups = this.getAllGroups.bind(this)
  }

  getAllGroups() {
    axios.get('/api/groups', {
    })
      .then(res => this.setState({ groups: res.data }))
  }

  componentDidMount() {
    this.getAllGroups()
  }

  render() {
    if(!this.state.groups) return null
    return(
      <div className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <CreateGroup />
            {this.state.groups.map(group =>
              <Group {...group} key={group._id} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Groups

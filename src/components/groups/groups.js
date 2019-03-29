import React, {Fragment} from 'react'
import 'bulma'
import axios from 'axios'
import Group from './group'
import CreateGroup from './createGroup'
import Auth from '../../lib/auth'

class Groups extends React.Component {
  constructor() {
    super()

    this.state = {
      groups: []
    }

    this.getAllGroups = this.getAllGroups.bind(this)
    this.filterGroups = this.filterGroups.bind(this)
  }

  getAllGroups() {
    axios.get('/api/groups', {
    })
      .then(res => this.setState({ groups: res.data }))
  }

  componentDidMount() {
    this.getAllGroups()
  }

  filterGroups() {
    const filteredArr = []
    this.state.groups.map(group => {
      group.usersAssigned.forEach(user => {
        if (user._id === Auth.getPayload().sub) {
          filteredArr.push(group)
        } else return
      })
    })
    return filteredArr
  }

  render() {
    if(!this.state.groups) return null
    return(
      <Fragment>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="title group-title">
                <i className="fas fa-users"></i>
                <div>Your Groups</div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="section">
            <div className="columns is-multiline">
              <CreateGroup onFetchGroups={this.getAllGroups}/>
              {this.filterGroups().map(group =>
                <Group {...group} key={group._id} onFetchGroups={this.getAllGroups} />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Groups

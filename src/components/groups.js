import React from 'react'
import 'bulma'
import axios from 'axios'
import Group from './group'


class Groups extends React.Component {
  constructor() {
    super()

    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    axios.get('/api/groups/user/5c9653df3ca726f655abf849', {
    })
      .then(res => this.setState({ groups: res.data }))
  }


  render() {
    if(!this.state.groups) return null
    return(
      <div>
        <h1 className="groupText">{`${this.props.user}`}s Page</h1>
        <p className="groupText">My Groups</p>
        {this.state.groups.map(group =>
          <Group {...group} key={group._id} />
        )}
        <Group />
      </div>
    )
  }
}

export default Groups

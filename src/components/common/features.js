import React from 'react'
import 'bulma'

class Features extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return (
      <section className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1">Organise/features</p>
            <hr />
            <p className="subtitle is-4"><strong>Unique Features:</strong><p>
              <strong>Organise</strong> is a simple and intuitive app that allows its users to create groups and assign users to work under these groups on a given task. In addition to storing your events, <strong>Organise</strong> provides you with a bright and structured interface, offering multiple ways to structure these tasks. You can add in specific categories with tasks nested within them, allowing you to prioritize an item.</p>
            <br />
            <p><strong>Organise</strong> also implements a friend feature that allows users to see all of their friends within the app and those who are assigned to the same task as them. Users are marked as active or inactive based on their status.The comments feature allows users to leave notes for each other, making communication and on-the-go interaction quick and seamless.</p>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Features

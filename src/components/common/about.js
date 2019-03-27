import React from 'react'
import 'bulma'

class About extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1">Organise/about</p>
            <hr />
            <p className="subtitle is-4"><strong>About Us:</strong><br/><br/>
              <p><strong>Organise</strong> is an group organisational tool that allows users to increase their productivity on a given task and effectively organize the planning of events in a clear and methodical way.
              </p>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About

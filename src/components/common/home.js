import React from 'react'
import 'bulma'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <section className="hero is-fullheight has-bg-img">
        <div className="hero-body is-1">
          <div className="container hero-container">
            <img src="./assets/72x72.png" />
            <p className="title is-1 is-left">Welcome to Organise.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Home

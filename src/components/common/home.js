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
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to Organise</h1>
            <h2 className="subtitle">Subtitle 3</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Home

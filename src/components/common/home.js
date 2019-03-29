import React from 'react'
import 'bulma'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <section className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1">Welcome to Organise.</p>
            <hr />
            <figure className="image is3by1">
              <img src="./assets/iphone-mock-up.png"></img>
            </figure>
          </div>
        </div>
      </section>
    )
  }
}

export default Home

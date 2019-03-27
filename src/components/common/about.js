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
            <p className="subtitle is-4"><strong>About content:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ex ullamcorper, volutpat dolor sed, ultricies ligula. Etiam laoreet nisl semper mi scelerisque, molestie pellentesque metus pulvinar. Quisque consectetur venenatis neque et pellentesque. Phasellus laoreet sit amet elit quis finibus. Mauris eu elit odio. Vivamus ac mauris ligula. Fusce nibh urna, molestie eu magna quis, dictum congue metus. Integer vitae dignissim erat, et auctor erat. Sed ut finibus urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About

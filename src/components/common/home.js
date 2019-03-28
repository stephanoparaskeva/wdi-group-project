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
            <p className="title is-1">Organise/reviews</p>
            <hr />
            <p className="subtitle is-4"><strong>User Reviews:</strong></p>
            <p className="is-italic"><strong>&apos;Organise&apos;</strong> is life-changing for planning events. It made organizing my bachelorette party a total breeze.&apos; -Jess, 25, London.</p>
            <br/>
            <p className="is-italic">
              <strong>&apos;Organise</strong> enabled me to coordinate the boys for my 30th birthday party trip to Ibiza. Who knew planning an international event could be so simple?&apos; -Matt, 30, Dubai.
            </p>
            <br/>
            <p className="subtitle is-4"><strong>Media Coverage:</strong></p>
            <p><strong>As featured in:</strong> Wired, Tech Crunch, Hello Magazine, Conde Naste Traveller and more! Click here for more reviews.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Home

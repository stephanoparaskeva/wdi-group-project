import React from 'react'
import 'bulma'

class Pricing extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return (
      <section className="hero is-fullheight is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <p className="title is-1">Organise/pricing</p>
            <hr />
            <p className="subtitle is-4"><strong>Free Users:</strong><br/>Organise is free service that lets users work with an unlimited number of group boards, category lists and task cards. Free users can add add and connect with their friends as there are no restrictions on the number of people users can collaborate with through the free version of Organise.</p>

            <p className="subtitle is-4"><strong>For Business:</strong><br/>
             Businesses with more extensive needs can opt for Organises Enterprise plan, which offers features designed for large companies that must coordinate projects across multiple teams. This plan includes features of Organise Business such as single sign-on access and additional security features, such as two-factor authentication, file encryption and intrusion detection.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Pricing

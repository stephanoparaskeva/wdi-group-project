import React from 'react'
import 'bulma'

class Footer extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <section className="container">
        <nav className="level">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <p className="subtitle is-5">Organise: Powered by General Assembly WDI39 </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-centered">
              <div className="subtitle is -2 is-right">
              Contact Us:
              </div>
              <span className="icon is-large is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-large is-left">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="icon is-large is-left">
                <i className="fab fa-facebook"></i>
              </span>
              <span className="icon is-large is-left">
                <i className="fab fa-instagram"></i>
              </span>
            </div>
          </div>
        </nav>
      </section>
    )
  }
}

export default Footer

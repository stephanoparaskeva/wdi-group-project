import React from 'react'
import 'bulma'

class Footer extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <footer className="footer is-small">
        <div className="container">
          <hr />
          <p className="subtitle is-6">Organise: Powered by General Assembly WDI39</p>
          <div className="subtitle is -2 is-left">
            <strong>Contact Us:</strong>
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
      </footer>
    )
  }
}

export default Footer

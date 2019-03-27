import React from 'react'
import 'bulma'

class Footer extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <footer>
        <div className="container">
          <hr />
          <p className="subtitle is-6">Organise: Powered by General Assembly WDI39</p>
          <br />
        </div>
      </footer>
    )
  }
}

export default Footer

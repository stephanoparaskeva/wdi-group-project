import React from 'react'
import 'bulma'
import { Link, withRouter } from 'react-router-dom'

const Nav = () => {
  return(
    <div>
      <div className="navbar is-dark">
        <div className=" navbar-brand is-primary">
          <a className="navbar-item" href="/#">
            <p>Our Logo</p>
          </a>
          <div className="navbar-end navbar-menu">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/register" className="button is-primary">
                  <strong>Register</strong>
                </Link>

                <Link to="/login" className="button is-primary">
                  <strong>Log In</strong>
                </Link>

                <Link to="/" className="button is-primary">
                  <strong>Group Page</strong>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar" role="navigation" aria-label="dropdown navigation">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Categories
          </a>
          <div className="navbar-dropdown">
            <a className="navbar-item">
              Dress
            </a>
            <a className="navbar-item">
              Travel
            </a>
            <a className="navbar-item">
              Activities
            </a>
            <a className="navbar-item">
              Fun
            </a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Priority
          </a>
          <div className="navbar-dropdown">
            <a className="navbar-item">
              High
            </a>
            <a className="navbar-item">
              Medium
            </a>
            <a className="navbar-item">
              Low
            </a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            User
          </a>
          <div className="navbar-dropdown">
            <a className="navbar-item">
              Stephano
            </a>
            <a className="navbar-item">
              Mary
            </a>
            <a className="navbar-item">
              Matt
            </a>
            <a className="navbar-item">
              Jess
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default withRouter(Nav)

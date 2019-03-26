import React from 'react'
import 'bulma'
import { withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'

const Nav = () => {
  return(
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="../images/36x36.png" />
          </div>
          <a className="navbar-item" href="/">
            <p className="is-size-4"><strong>Organise</strong></p>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a href="/about" className="navbar-item">About</a>
            <a href="/pricing" className="navbar-item">Pricing</a>
            <a href="/features" className="navbar-item">Features</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">New</a>
              <div className="navbar-dropdown">
                <a href="/tasks" className="navbar-item">Task</a>
                <a href="/categories " className="navbar-item">Category</a>
                <a href="/groups" className="navbar-item">Group</a>
              </div>
            </div>
            <div className="navbar-end">
              <a href="/login" className="navbar-item">Login/Register</a>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Account</a>
              <div className="navbar-dropdown">
                <a href="/myProfile" className="navbar-item">My Profile</a>
                <a href="/users" className="navbar-item">Find friends</a>
                <a href="/invitefriends" className="navbar-item">Invite a friend</a>
                <a href="/help" className="navbar-item">Help</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" onClick={Auth.logout}>Logout</a>
              </div>
            </div>
            <div className="navbar-end">
              <a className="navbar-item is-primary "><strong>New Task</strong></a>
            </div>
            <div className="navbar-end">
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Nav)

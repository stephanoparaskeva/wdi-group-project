import React from 'react'
import 'bulma'

const Task = () => {
  return(
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          A Task
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <p>This task is to do a task</p>
          <br />
          <p>Created by: Jess</p>
          <p>Priority: High</p>
          <p>Category: Clothes</p>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">Save</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
      </footer>
    </div>
  )
}

export default Task

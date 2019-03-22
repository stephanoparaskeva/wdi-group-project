import React from 'react'
import axios from 'axios'
import 'bulma'


class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/api/register', this.state.data)
    // then(res => res.data)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err.message))
  }

  render() {
  return(
    <div>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Registration</p>
            <button className="delete" aria-label="close"></button>
          </header>

          <section className="modal-card-body">
            <main className="section">
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <h1 className="welcome">Welcome to Organize! To register, please fill in the fields below.</h1>
                  <br />
                  <h2 className="title">Register</h2>
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input
                         className="input"
                         name="username"
                         placeholder="Username"
                         value={this.state.data.username}
                         onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        name="email"
                        placeholder="Email"
                        value={this.state.data.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        className="input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.data.password}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password Confirmation</label>
                    <div className="control">
                      <input
                        className="input"
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Password Confirmation"
                        value={this.state.data.passwordConfirmation}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <button className="button is-info">Create A New Account</button>
                </form>
              </div>
            </main>
          </section>

          <footer className="modal-card-foot">
            <button className="button is-success">Register</button>
            <button className="button">Cancel</button>
            <p className="has-text-grey">
              <a href="../">Login</a> &nbsp;·&nbsp;
            </p>

            <script async type="text/javascript" src="http://localhost:4000/login"></script>
          </footer>
        </div>
      </div>
    </div>
  )
}
}

export default Register

import React from 'react'
import axios from 'axios'
import 'bulma'
import Auth from '../../lib/auth'


class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        newsletter: false
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleChangeRadio = this.handleChangeRadio.bind(this)
  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleDone(e){
    e.preventDefault()
    this.props.history.push('/login')
  }

  handleChangeRadio() {
    this.setState({ newsletter: !this.state.newsletter })
  }


  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
      })
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
              <p className="modal-card-title"><strong>Start Organising today!</strong></p>
              <button className="delete" aria-label="close" onClick={this.handleDone}></button>
            </header>

            <section className="modal-card-body">
              <form onSubmit={this.handleSubmit}>
                <h1 className="subtitle is-5">Welcome to Organise! To register, please fill in the fields below.</h1>
                <br />
                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <label className="subtitle is-6"><strong>Username</strong></label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        name="username"
                        placeholder="Username"
                        value={this.state.data.username}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <label className="subtitle is-6"><strong>Email</strong></label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        name="email"
                        placeholder="Email"
                        value={this.state.data.email}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <label className="subtitle is-6"><strong>Password</strong></label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.data.password}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <label className="subtitle is-6"><strong>Password Confirmation</strong></label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Password Confirmation"
                        value={this.state.data.passwordConfirmation}
                        onChange={this.handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="control">
                    <p>Sign up to our newsletter
                      <input
                        type="checkbox"
                        name="newsletter"
                        value={this.state.data.newsletter}
                        onClick={this.handleChangeRadio}
                      />
                    </p>
                  </div>
                </div>
                <button className="button is-info is-fullwidth"><strong>Create A New Account</strong></button>
              </form>
            </section>
            <footer className="modal-card-foot">
              <a className="subtitle is-6 has-text-grey-light is-italic" href="/terms">Check out our terms and conditions</a>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default Register

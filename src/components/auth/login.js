import React from 'react'
import axios from 'axios'
import 'bulma'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: { email: '', password: '' },
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDone = this.handleDone.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleDone(e){
    e.preventDefault()
    this.props.history.push('/')
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/api/login', this.state.data)
      .then(res => {
        console.log(res.data.token)
        this.setState({token: res.data.token})
        this.props.history.push('/')
      })
      .catch(() => {
        this.setState({ error: 'Invalid Credentials, login Fail.'})
      })
  }

  render() {
    return (
      <div>
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Welcome!</p>
              <button className="delete" aria-label="close" onClick={this.handleDone}></button>
            </header>

            <section className="modal-card-body">
              <main className="section">
                <div className="container">
                  <section className="hero is-success is-fullheight">
                    <div className="hero-body">
                      <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                          <h3 className="title has-text-grey">Login</h3>
                          <p className="subtitle has-text-grey">Please sign in to proceed.</p>
                          <p className="subtitle has-text-blue">You are only one step away from organizing your life!</p>
                          <div className="box">
                            <form onSubmit={this.handleSubmit}>
                              <div className="field">
                                <div className="control">
                                  <input
                                    name="email"
                                    className="input is-large"
                                    type="email"
                                    placeholder="Your Email"
                                    value={this.state.data.email}
                                    onChange={this.handleChange}
                                    autoFocus=""/>
                                </div>
                              </div>

                              <div className="field">
                                <div className="control">
                                  <input
                                    className="input is-large" type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    value={this.state.data.password}
                                    onChange={this.handleChange}/>
                                </div>
                              </div>
                              <button className="button is-block is-info is-large is-fullwidth">Login</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
            </section>

            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={this.handleDone}>Done
              </button>
              <button
                className="button"
                onClick={this.handleDone}>Cancel
              </button>
              <p className="has-text-grey">
                <a href="http://localhost:8000/register">Register Instead</a> &nbsp;·&nbsp;
              </p>

            </footer>

          </div>
        </div>
      </div>
    )
  }
}

export default Login

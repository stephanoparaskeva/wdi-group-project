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
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/api/login', this.state.data)
      .then(res => {
        this.setState({token: res.data.token})
        this.props.history.push('/login')
      })
      .catch(() => {
        this.setState({ error: 'Invalid Credentials, login Fail.'})
      })
  }

  render() {
    return (
      <div>
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Login</h3>
                <p className="subtitle has-text-grey">Please fill in the fields below to proceed.</p>
                <p className="subtitle has-text-blue">You are only one step away from organizing your life!</p>
                <div className="box">
                  <figure className="avatar">
                    <img src="https://placehold.it/128x128"></img>
                  </figure>
                  <form>
                    <div className="field">
                      <div className="control">
                        <input className="input is-large" type="email" placeholder="Your Email" autoFocus="">autoFocus
                        </input>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input className="input is-large" type="password" placeholder="Your Password">
                        </input>
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input type="checkbox">
                    Keep me logged in
                        </input>
                      </label>
                    </div>
                    <button className="button is-block is-info is-large is-fullwidth">Login</button>
                  </form>
                </div>
                <p className="has-text-grey">
                  <a href="../">Sign Up</a> &nbsp;·&nbsp;
                </p>
              </div>
            </div>
          </div>
        </section>
        <script async type="text/javascript" src="http://localhost:4000/register"></script>
      </div>
    )
  }
}

export default Login

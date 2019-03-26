import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
import 'bulma'

import SecureRoute from './lib/secureRoute'
import Nav from './components/nav'
import Tasks from './components/tasks/tasks'
import Register from './components/auth/register'
import Login from './components/auth/login'
import ForgotPassword from './components/auth/forgotpassword'
import Groups from './components/groups/groups'
import Users from './components/users/usersIndex'
import UsersRequest from './components/users/usersRequest'
import MyProfile from './components/users/myProfile'

const App = () => {
  return (
    <Browser>
      <div>
        <Nav />
        <Switch>
          <SecureRoute path="/users/:userId" component={UsersRequest}/>
          <SecureRoute path="/users" component={Users} />
          <SecureRoute path="/myProfile" component={MyProfile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/groups/:groupId" component={Tasks}/>
          <Route path="/groups" component={Groups} />
        </Switch>
        <br />
      </div>
    </Browser>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

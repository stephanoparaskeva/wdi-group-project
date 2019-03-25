import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
import 'bulma'

import Nav from './components/nav'
import Tasks from './components/tasks/tasks'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Groups from './components/groups/groups'

const App = () => {
  return (
    <Browser>
      <div>
        <Nav />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/groups/:groupId/tasks" component={Tasks}/>
          <Route path="/groups" component={Groups} />
        </Switch>
        <br />
      </div>
    </Browser>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

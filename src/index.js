import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Courses from './views/courses'
import Profile from './views/profile'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Courses} exact path="/courses" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

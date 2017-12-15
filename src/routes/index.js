import React from 'react'
import {
  Route
} from 'react-router'
import Login from '../pages/login.jsx'

const routes = (
  <Route>
    <Route path='/' component={Login} />
  </Route>
)

export default routes

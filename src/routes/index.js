import React from 'react'
import {
  Route
} from 'react-router'
import Login from '@src/pages/login/login.jsx'

const routes = (
  <Route>
    <Route path='/' component={Login} />
  </Route>
)

export default routes

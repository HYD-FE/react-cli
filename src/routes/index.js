import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'
import Login from '@src/pages/login/login.jsx'
import Welcome from '@src/pages/welcome.jsx'

/* 进入路由的判断 */
function isLogin (nextState, replaceState) {
  const token = sessionStorage.getItem('token')
  if (!token) {
    replaceState('/login')
  }
}

const routes = (
  <Route>
    <Route path='/' onEnter={isLogin}>
      <IndexRoute component={Welcome} />
    </Route>
    <Route path='/login' component={Login} />
  </Route>
)

export default routes

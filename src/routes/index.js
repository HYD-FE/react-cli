import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'
import { Welcome, Login} from '@pages'
import container from '@src/container/index.jsx'

/* 进入路由的判断 */
function isLogin (nextState, replaceState) {
  const token = sessionStorage.getItem('token')
  if (!token) {
    replaceState('/login')
  }
}

const routes = (
  <Route>
    <Route path='/' component={container} onEnter={isLogin}>
      <IndexRoute component={Welcome} />
    </Route>
    <Route path='/login' component={Login} />
  </Route>
)

export default routes

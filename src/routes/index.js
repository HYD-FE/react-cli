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

// let a = require('@pages/table')
// console.log('a', a)

// const componentGet = (name) => (location, cb, name) => {
//   require.ensure([], require => {
//     cb(null, require('@pages/table').default)
//   }, name)
// }

const componentGet = (name) => (location, cb) => {
  require.ensure([],
    require => {
      cb(null, require('@pages/' + name).default)
    }
  )
}

// let b = componentGet('table')

const routes = (
  <Route>
    <Route path='/' component={container} onEnter={isLogin}>
      <IndexRoute component={Welcome} />
      <Route path='table' getComponent={componentGet('table')} />
    </Route>
    <Route path='/login' component={Login} />
  </Route>
)

export default routes

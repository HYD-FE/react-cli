import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'
import { Welcome, Login} from '@pages'
import container from '@src/container/index.jsx'

import navbars from '@src/lib/navbars'

function getAllLists (navbars) {  // 抽离出navbars  改造成routes
  let list = []
  if (navbars.length && navbars.length > 0) {
    navbars.forEach((e, i) => {
      if (e.children && e.children.list && e.children.list.length > 0) {
        let nextlist = getAllLists(e.children.list)
        list = list.concat(nextlist)
      } else {
        if (e.url) {
          list.push(e)
        }
      }
    })
  }

  return list
}

let routeslist = getAllLists(navbars)

console.log(routeslist)

/* 进入路由的判断 */
function isLogin (nextState, replaceState) {
  const token = window.sessionStorage.getItem('token')
  if (!token) {
    replaceState('/login')
  }
}

const componentGet = (name) => (location, cb) => {
  console.log('@pages' + name)
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
      {/* <Route path='table' getComponent={componentGet('table')} /> */}
      {routeslist.map((e, i) => {
        return (<Route key={`route-${i}`} path={e.url} getComponent={componentGet(e.url)} />)
      })}
    </Route>
    <Route path='/login' component={Login} />
  </Route>
)

export default routes

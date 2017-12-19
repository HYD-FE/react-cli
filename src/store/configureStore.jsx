
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger, router, reduxRouterMiddleware } from '../middleware'
import rootReducer from '../reducers'
import {history} from '../lib/global.js'
const nextReducer = require('../reducers')

export default function configure (initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware,
    logger,
    router
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  store.subscribe((a, b, c) => { // 订阅，如果logined发生变化，则自动触发登录到welcome页
    if (store.getState().loginReducer && store.getState().loginReducer.logined) {
      if (!window.sessionStorage.getItem('token')) {
        window.sessionStorage.setItem('token', new Date().getTime())
        history && history.push({pathname: '/'})
      }
    }
  })

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

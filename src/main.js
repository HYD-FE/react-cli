import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { store, history} from './lib/global.js'
import routes from './routes'

// history.listen(location => console.log('location:', location))
// history.listen(function (location) { return location })

// console.log('store', store)
// console.log('history', history)

ReactDOM.render( // 将store 放到 context  下面的provider
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

/* * ------------------------------------------------------------------
 * Copyright  2017-12-29, Hangzhou  DtDream Technology Co.,Ltd. All rights reserved.
* ------------------------------------------------------------------
* Product : study *
* Module Name : react-cli
* Date Created: 2017-12-02
* Description :
* ------------------------------------------------------------------
* Modification History * DATE Name Description
* ------------------------------------------------------------------
* 2017-12-02 牛有德0865(丁磊)
* ------------------------------------------------------------------ */

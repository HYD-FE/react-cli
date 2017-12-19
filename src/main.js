import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configure from './store/configureStore.jsx'
import myhistory from './history'

import './style/normalize.less'
import './style/base.less'

const store = configure({ config: 'dinglei' })
const history = syncHistoryWithStore(myhistory, store)
// history.listen(location => console.log('location:', location))
// history.listen(function (location) { return location })

ReactDOM.render( // 将store 放到 context  下面的provider
  <Provider store={store}>
    <Router history={history} >
      {routes}
    </Router>
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

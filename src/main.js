import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configure from './store/configureStore.jsx'
import myhistory from './history'

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

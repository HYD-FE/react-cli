
import { syncHistoryWithStore } from 'react-router-redux'
import configure from '../store/configureStore.jsx'
import myhistory from '../history'

import navList from './navbars'

const store = configure({ config: { navList: navList } })
const history = syncHistoryWithStore(myhistory, store)

window.global = {
  store,
  history
}

export {
  store,
  history
}

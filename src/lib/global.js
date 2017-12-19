
import { syncHistoryWithStore } from 'react-router-redux'
import configure from '../store/configureStore.jsx'
import myhistory from '../history'

const store = configure({ config: { login: false } })
const history = syncHistoryWithStore(myhistory, store)

window.global = {
  store,
  history
}

export {
  store,
  history
}

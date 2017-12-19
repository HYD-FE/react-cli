import {
  routerReducer as routing
} from 'react-router-redux'
import {
  combineReducers
} from 'redux'

import loginReducer from './login.js'

const rootReducer = combineReducers({
  routing,
  loginReducer,
  config: (state = {}) => state
})

export default rootReducer

import {
  routerReducer as routing
} from 'react-router-redux'
import {
  combineReducers
} from 'redux'

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state
})

export default rootReducer

import { combineReducers } from 'redux'

import auth from './auth'
import comments from './comments'
import series from './series'
const rootReducer = combineReducers({
    auth,
    comments,
    series
})

export default rootReducer
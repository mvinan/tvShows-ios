import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middlewares = applyMiddleware(promise(), thunk, logger())
const store = createStore(allReducers, middlewares)

export default store

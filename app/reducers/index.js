import {combineReducers} from 'redux'
import {fetchShows} from './showsReducer'

const allReducers = combineReducers({
  fetchShows
})

export default allReducers

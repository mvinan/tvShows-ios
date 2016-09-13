import {combineReducers} from 'redux'
import fetchShows from './fetchShowsReducer'

const allReducers = combineReducers({
  fetchShows
})

export default allReducers

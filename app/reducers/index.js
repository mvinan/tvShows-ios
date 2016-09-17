import {combineReducers} from 'redux'
import fetchShows from './fetchShowsReducer'
import currentRating from './currentRatingReducer'

const allReducers = combineReducers({
  fetchShows,
  currentRating
})

export default allReducers

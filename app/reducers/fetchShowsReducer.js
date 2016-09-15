import { ListView } from 'react-native'

const initialState = {
  shows: [],
  showsLoaded: false,
  showsPending: true,
  dataSource: new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  })
}

const fetchShows = (state=initialState, action) => {
  let newState
  switch (action.type) {
    case 'FETCH_SHOWS_PENDING':
      newState = {
        ...state,
        showsPending: false
      }
      return newState
    case 'FETCH_SHOWS_FULFILLED':
      newState = {
        ...state,
        shows: action.payload,
        showsLoaded: true,
      }
      return newState
    case 'FETCH_SHOWS_REJECTED':
      newState = {
        ...state,
        error: action.payload,
        showsLoaded: false
      }
      return newState
    default:
      return state
  }
}

export default fetchShows

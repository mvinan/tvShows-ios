const initialState = {
  shows: []
}

const fetchShows = (state=initialState, action) => {
  let newState
  switch (action.type) {
    case 'FETCH_SHOWS':
      newState = {...state, shows: action.payload}
      return newState
    default:
      return state
  }
}

export default fetchShows

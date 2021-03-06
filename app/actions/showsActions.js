import axios from 'axios'

export const fetchShows = (url, listView) => {
  return function(dispatch){
    axios.get(url)
      .then( response => {
        let shows = response

        dispatch({
          type: 'FETCH_SHOWS',
          payload: axios.get(url)
        })
      })
  }
}

export const getCurrentRating = (rating) => {
  return {
    type: 'GET_CURRENT_RATING_INFO',
    rating
  }
}

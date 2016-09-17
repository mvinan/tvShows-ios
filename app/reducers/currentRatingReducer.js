import color from '../colorPalette'
const { coolYellow, red } = color

const initialState = {
  currentColor: 'black',
  currentIconName: 'md-sad'
}

const currentRating = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_RATING_INFO':
      let currentColor, currentIconName

      if(action.rating < 4){
        currentColor= 'black'
        currentIconName= 'md-sad'
      }

      if(action.rating > 4 && action.rating <= 8){
        currentColor= coolYellow
        currentIconName= 'md-thumbs-down'
      }

      if(action.rating > 8){
        currentColor= red
        currentIconName= 'md-flame'
      }

      return {
        ...state,
         currentColor: currentColor,
         currentIconName: currentIconName
       }
    default:
      return state
  }

}

export default currentRating

import color from '../colorPalette'
const { coolYellow, red } = color

const initialState = {
  currentColor: 'black',
  currentIconName: 'md-sad'
}

const getCurrentRating = (rating, state=initialState) => {
  let currentColor, currentIconName

  if(rating < 4){
    return {
      currentColor: 'black',
      currentIconName: 'md-sad'
    }
  }

  if(rating > 4 && rating <= 8){
    return {
      currentColor: coolYellow,
      currentIconName: 'md-thumbs-down'
    }
  }

  if(rating > 8){
    return {
      currentColor: red,
      currentIconName: 'md-flame'
    }

  }
}

export default getCurrentRating

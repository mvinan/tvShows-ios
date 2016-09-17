import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import autobind from 'autobind-decorator'
import Icon from 'react-native-vector-icons/Ionicons'
import getCurrentRating from '../utilities/getCurrentRating'

import color from '../colorPalette'
const {
  orange,
  blue,
  red,
  coolYellow,
  darkSnow,
  darkSmoke,
  lightDark,
  backgroundRow,
  dark
} = color

var windowWidht = Dimensions.get('window').width - 20;

function autoHeight(width, height, newWidth){
  let unitHeight = (newWidth * height) / width
  return unitHeight
}

class SingleShow extends Component {
  @autobind
  currentRating(rating){
    let ratingColor

    if(rating < 4){
      ratingColor = 'black'}

    if(rating > 4 && rating <= 8){
      ratingColor = orange}

    if(rating > 8){
      ratingColor = red}

    return (
      <Text style={[styles.ratingNumber, {color: ratingColor}]}>
        {rating}
      </Text>
    )
  }

  @autobind
  currentIcon(rating){
    let ratingIcon
    let ratingColor = darkSnow
    if(rating < 4){
      ratingIcon = 'md-sad'}

    if(rating > 4 && rating <= 8){
      ratingIcon = 'md-thumbs-down'}

    if(rating > 8){
      ratingIcon = 'md-flame'}

    return (
      <Icon
        name={ratingIcon}
        size={40}
        color={ratingColor}
      />
    )
  }

  render() {
    const { show } = this.props.route
    const showRating = show.rating.average

    const rating = getCurrentRating(showRating)
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {show.name}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <View>
              <Text style={styles.ratingText}>
                Rating
              </Text>

              <Text style={[styles.ratingNumber, {color: rating.currentColor}]}>
                {showRating}
              </Text>

            </View>

            <Icon
              name={rating.currentIconName}
              size={40}
              color={rating.currentColor}
            />

            <View>
              {show.genres.map( (genre, i)=>{
                return (
                  <Text style={{color: dark}} key={i}>{genre}</Text>
                )
              })}
            </View>
          </View>
        </View>
        <Image
          style={styles.image}
          source={{uri: show.image.original}}
          resizeMode="contain"
        />

        <Text style={styles.showDescription}>
          {show.summary}
        </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: darkSmoke,
    marginBottom: 15
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 15
  },
  image:{
    width: windowWidht,
    height: autoHeight(320, 450, windowWidht ),
    marginTop: 20,
    marginBottom: 20
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ratingNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    color: orange,
    lineHeight: 60
  },
  ratingText: {
    color: dark,
  },
  showDescription: {
    color: lightDark,
    marginBottom: 20
  }
})

export default SingleShow

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import color from '../colorPalette'
const {
  orange,
  blue,
  red,
  coolYellow,
  darkSnow,
  darkSmoke
} = color

var windowWidht = Dimensions.get('window').width - 20;

function autoHeight(width, height, newWidth){
  let unitHeight = (newWidth * height) / width
  return unitHeight
}

class SingleShow extends Component {
  render() {
    const { show } = this.props.route
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>{show.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingNumber}>{show.rating.average}</Text>
            <Text style={styles.ratingText}>RATING</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={{uri: show.image.medium}}
          resizeMode="contain"
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  image:{
    width: windowWidht,
    height: autoHeight(320, 450, windowWidht )
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  ratingNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    color: orange,
    marginBottom: -10
  },
  ratingText: {
    color: darkSmoke,
    marginBottom: 20
  }
})

export default SingleShow

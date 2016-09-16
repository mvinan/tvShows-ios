import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux'
import autobind from 'autobind-decorator'
import {fetchShows} from '../actions/showsActions';

import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'
import color from '../colorPalette'
import Button from 'react-native-button'

/*Views*/
import SingleShow from './SingleShow'
var {
  darkSnow,
  darkSmoke,
  marvel,
  coolGreen,
  pink,
  coolYellow,
  lightOrange,
  purple,
  red,
  backgroundRow,
} = color

@connect( store => ({
  shows: store.fetchShows.shows.data,
  showsLoaded: store.fetchShows.showsLoaded,
  dataSource: store.fetchShows.dataSource
}))
class Shows extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  currentRanting(rating){
    let currentColor, currentIcon

    // Bad rating 1 - 4
    if(rating < 4){
      currentColor = 'black'
      currentIcon = 'md-sad'
    }
    // Good rating 5-7
    if(rating > 4 && rating <= 8){
      currentColor = coolYellow
      currentIcon = 'md-thumbs-down'
    }
    // Excelent rating 8
    if(rating > 8){
      currentColor = red
      currentIcon = 'md-flame'
    }

    return (
      <Icon
        style={styles.rankIcon}
        name={currentIcon}
        size={20}
        color={currentColor}
      />
    )
  }

  componentDidMount(){
    const { dispatch, showsLoaded, shows } = this.props

    if(!showsLoaded){
      dispatch( fetchShows('http://api.tvmaze.com/shows') )
    }
  }

  @autobind
  passShow(show){
    this.props.navigator.push({
      component: SingleShow,
      title: 'Detalles',
      show
    })
  }

  @autobind
  renderRow(show){
    let iconRating = this.currentRanting(show.rating.average)
    const pressShow = () => this.passShow(show)
    return (
      <TouchableHighlight
        style={styles.row}
        onPress={pressShow}
        underlayColor={darkSnow}
      >
        <View style={styles.touchContainer}>
          <View style={styles.description}>
            <Image
              source={{uri: show.image.medium}}
              style={styles.showImage}
              resizeMode="contain"
            />

            <View style={styles.descriptionText}>
              <Text style={styles.showTitle}>{show.name}</Text>

              <View style={styles.rankContainer}>
                {iconRating}
                <Text style={styles.rankText}>
                  {show.rating.average} / 10
                </Text>
              </View>
            </View>
          </View>

          <Icon
            name="ios-arrow-forward-outline"
            size={25}
            color={marvel}
          />
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {showsLoaded, shows, dataSource} = this.props

    if(showsLoaded){
      let ds = dataSource.cloneWithRows(shows)
      return (
        <View style={styles.showContainer}>
          <ListView
            dataSource={ds}
            renderRow={this.renderRow}
          />
        </View>
      )
    }
    return (
      <Text>Cargando ...</Text>
    );
  }
}

const styles = StyleSheet.create({
  shows: {
    padding: 7
  },
  touchContainer: {
    flex: 1,
    justifyContent: 'space-between', flexDirection: 'row',
    alignItems: 'center'
  },
  showTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
  },
  listView: {
    flex: 1
  },
  description: {
    flexDirection: 'row',
    alignItems: 'stretch',
    flex: 1
  },
  descriptionText: {
    marginLeft: 15,
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  showContainer: {
    flex: 1,
    marginTop: 60,
    marginBottom: 50,
    backgroundColor: backgroundRow
  },
  row: {
    borderBottomColor: darkSmoke,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    marginTop: 3,
    marginBottom: 3,
    padding: 7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  showImage: {
    width: 80,
    height: 120
  },
  rankContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rankText: {
    color: darkSmoke,
    marginLeft: 20
  },
})

export default Shows

import React, { Component } from 'react';
import Button from 'react-native-button'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import autobind from 'autobind-decorator'
import Shows from './Shows'
import App from './App'
import {connect} from 'react-redux'

import color from '../colorPalette'
const {blue, red, coolYellow, orange, marvel, purple} = color

/*Images*/
import tvBackground from '../images/tv-shows-background.png'

class Home extends Component {
  constructor(props){
    super(props)
  }

  @autobind
  _nextView(){
    this.props.onAction(true)
  }

  render() {
    return (
      <Image
        source={tvBackground}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a tvShows!</Text>
          <Button
            containerStyle={styles.buttonContainer}
            style={styles.buttonText}
            onPress={this._nextView}>
          Entrar</Button>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems :'center'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 380,
    height: 670
  },
  buttonContainer:{
    backgroundColor: purple,
    padding: 15,
    width: 280,
    borderRadius: 5,
    marginTop: 350
  },
  buttonText: {
    color: 'white'
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'transparent',
    color: 'white'
  }
})

export default Home

import React, { Component } from 'react';
import Button from 'react-native-button'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux'

@connect( store => ({
  shows: store.fetchShows
}))
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the App component</Text>
        <Button style={styles.button}>
          Pulsame
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems :'center'
  },
  button: {
    backgroundColor: 'red',
    color: 'white'
  }
})

export default App

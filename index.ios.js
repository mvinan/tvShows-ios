/**
 * Sample React Native App TvMaze
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

/*Redux*/
import { Provider } from 'react-redux'
import store from './app/store'
import Home from './app/views/Home'
import App from './app/views/App'

class tvShows extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayApp: false,
      displayWelcome: true
    }
  }

  displayApp(bool){
    this.setState({
      displayApp: bool,
      displayWelcome: !bool
    })
  }

  render() {
    if(this.state.displayWelcome){
      return (
        <Home onAction={this.displayApp.bind(this)}/>
      )
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('tvShows', () => tvShows);

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
import {Provider} from 'react-redux'
import store from './app/store'
import App from './app/App'

class tvShows extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          initialRoute={{
            component: App,
            title: 'Home'
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('tvShows', () => tvShows);

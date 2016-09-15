import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Beer extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>I'm the Beer component</Text>
      </View>
    );
  }
}

export default Beer

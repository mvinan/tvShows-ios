import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Info extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>I'm the Info component</Text>
      </View>
    );
  }
}

export default Info

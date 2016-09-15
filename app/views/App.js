import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import TabBar from '../components/TabBar'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <TabBar/>
    );
  }
}

export default App

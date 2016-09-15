import React, { Component } from 'react';
import {
  View,
  Text,
  TabBarIOS,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

import Shows from '../views/Shows'
import Beer from '../views/Beer'
import App from '../views/App'
import Info from '../views/Info'
import Icon from 'react-native-vector-icons/Ionicons'

/*Colors*/
import color from '../colorPalette'
var { red, blue, yellow, lightGrey, marvel, coolGreen, darkSnow, darkSmoke } = color

class TabBar extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'mediaTab'
    }
  }
  render() {
    const {selectedTab} = this.state
    return (
      <TabBarIOS
        barTintColor={'white'}
        tintColor={darkSmoke}
        style={{alignItems: 'center', paddingTop: 60}}
        itemPositioning='center'
      >
        <Icon.TabBarItemIOS
          iconName="md-apps"
          iconColor={darkSmoke}
          selectedIconColor={marvel}
          renderAsOriginal={true}
          iconSize={35}
          onPress={()=>{this.setState({selectedTab: 'mediaTab'})}}
          selected={selectedTab === 'mediaTab'}
        >
          <NavigatorIOS
            initialRoute={{
              component: Shows,
              title: 'Shows'
            }}
            style={{flex: 1}}
          />

        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          iconName="md-beer"
          iconColor={darkSmoke}
          selectedIconColor={marvel}
          renderAsOriginal={true}
          iconSize={35}
          onPress={()=>{
            this.setState({selectedTab: 'tipsTab'})
          }}
          selected={selectedTab === 'tipsTab'}>
          <NavigatorIOS
            initialRoute={{
              component: Beer,
              title: 'Una Cervecita'
            }}
            style={{flex: 1}}
          />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          iconName="md-hand"
          iconColor={darkSmoke}
          selectedIconColor={marvel}
          renderAsOriginal={true}
          iconSize={35}
          onPress={()=>{this.setState({selectedTab: 'info'})}}
          selected={selectedTab === 'info'}
        >
          <NavigatorIOS
            initialRoute={{
              component: Info,
              title: 'Información'
            }}
            style={{flex: 1}}
          />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  showsTab: {
    backgroundColor: 'white'
  }
})

export default TabBar

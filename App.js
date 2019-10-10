/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { View } from 'react-native'
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//
import Home from './src/Screens/Home'
import About from './src/Screens/About'
//
const App = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'message-plus'} />
          </View>
        )
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'help-circle'} />
          </View>
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#7DB4B1',
    barStyle: { backgroundColor: '#075E54' }
  }
)
export default createAppContainer(App)

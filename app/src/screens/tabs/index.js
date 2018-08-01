import React from 'react'
import { connect } from 'react-redux'
import TabHome from './containers/TabHome'
import TabDetail from './containers/TabDetail'
import {
  createBottomTabNavigator,
  createStackNavigator,
  TabBarBottom
} from 'react-navigation'

const TabDetailsStack = createStackNavigator({
  Details: TabDetail
})

const TabHomeStack = createStackNavigator({
  Home: TabHome
})

export default createBottomTabNavigator({
    Home: TabHomeStack,
    Details: TabDetailsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      /* tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `heart${focused ? '' : '-outline'}`
        } else if (routeName === 'Details') {
          iconName = `heart${focused ? '' : '-outline'}`
        }

        return <FontAwesome>{Icons.chevronLeft}</FontAwesome>
      } */
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      },
      animationEnabled: true,
      swipeEnabled: true
    })
  }
)

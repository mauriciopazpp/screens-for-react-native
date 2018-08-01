import React from 'react'
import { createStackNavigator } from 'react-navigation'

import login from '@screen/auth'
import tabs from '@screen/tabs'
import tabDetail from '@screen/tabs/containers/TabDetail'
import tabHome from '@screen/tabs/containers/TabHome'

const routes =
{
    tabs: {
        screen: tabs,
        navigationOptions: { header: null }
    },
    tabHome: {
        screen: tabHome
    },
    tabDetail: {
        screen: tabDetail,
        navigationOptions: { header: null }
    },
    login: {
        screen: login,
        navigationOptions: { header: null }
    }
}

export default Routes = createStackNavigator(routes)
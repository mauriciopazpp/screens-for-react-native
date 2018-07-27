import React from 'react'
import { createStackNavigator } from 'react-navigation'

import login from '@screen/auth'

const routes =
{
    login: {
        screen: login,
        navigationOptions: { header: null }
    }
}

export default Routes = createStackNavigator(routes)
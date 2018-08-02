import React from 'react'
import ProductList from './containers/ProductList'
import { index as style } from './assets/style'
import { View } from 'react-native'

const App = () => (
  <View style={ style.container }>
    <ProductList />
  </View>
)

export default App
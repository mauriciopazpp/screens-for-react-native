import React from 'react'
import { View, Button, Text } from 'react-native'

class TabDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('tabHome')}
        />
      </View>
    );
  }
}

export default TabDetail
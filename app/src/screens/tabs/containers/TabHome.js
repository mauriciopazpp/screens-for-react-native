import React from 'react'
import { View, Button, Text } from 'react-native'

class TabHome extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
            />
        </View>
        );
    }
}

export default TabHome
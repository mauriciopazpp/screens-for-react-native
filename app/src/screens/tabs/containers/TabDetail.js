import React from 'react'
import { View, Button, Text } from 'react-native'

class TabDetail extends React.Component {
    static navigationOptions = {
        title: 'Detalhes'
    }

    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
        );
    }
}

export default TabDetail
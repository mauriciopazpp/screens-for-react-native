import React from 'react'
import { View, ScrollView } from 'react-native'
import { List, ListItem, FlatList } from 'react-native-elements'

class ListScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const data = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Camila Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/84.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Aurora Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/72.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Camila Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/84.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Aurora Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/72.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Camila Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/84.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Aurora Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/72.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Camila Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/84.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Aurora Silva',
            avatar_url: 'https://randomuser.me/api/portraits/women/72.jpg',
            subtitle: 'Vice Chairman'
        }
        ]

        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <List containerStyle={{marginBottom: 20}}>
                    {
                        data.map((item, index) => (
                        <ListItem
                            roundAvatar
                            avatar={{ uri:item.avatar_url }}
                            key={ index }
                            subtitle={ item.subtitle }
                            title={ item.name }
                            onPress={ () => console.log('Hey apple hey!') }
                        />
                        ))
                    }
                    </List>
                </ScrollView>
            </View>
        )
    }
}

export default ListScreen
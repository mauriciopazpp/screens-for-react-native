import React from 'react'
import { View } from 'react-native'
import { List, ListItem, FlatList } from 'react-native-elements'

class ListScreen extends React.Component {
    constructor(props) {    
        super(props)
    }

    render () {
        const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        }
        ]
        
        return (
            <List>
                <FlatList
                    data={list}
                    renderItem={item => (
                    <ListItem
                        roundAvatar
                        title={item.name}
                        subtitle={item.subtitle}
                        avatar={{ uri: item.avatar_url }}
                    />
                    )}
                />
            </List>
        )
    }
}

export default ListScreen
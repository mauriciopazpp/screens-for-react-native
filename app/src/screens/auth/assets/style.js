import { StyleSheet } from 'react-native'
import { scaleVertical } from '@utils/scale'

const style = props => StyleSheet.create(props)

export const login = style({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
      resizeMode: 'cover',
      marginBottom: scaleVertical(10)
    },
    container: {
        paddingHorizontal: 17,
        paddingBottom: scaleVertical(22),
        alignItems: 'center',
        flex: -1
    }
})
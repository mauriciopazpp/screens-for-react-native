import { StyleSheet } from 'react-native'
import { scaleVertical } from '@utils/scale'
import { Dimensions } from 'react-native'

const style = props => StyleSheet.create(props)

const $magicSizeOne = 25;

const containerForm = Dimensions.get('window').width - ($magicSizeOne * 3)

export const login = style({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
      resizeMode: 'cover',
      marginBottom: scaleVertical($magicSizeOne/2)
    },
    container: {
        paddingHorizontal: $magicSizeOne,
        paddingBottom: scaleVertical($magicSizeOne),
        alignItems: 'center',
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical($magicSizeOne)
    },
    save: {
        marginVertical: $magicSizeOne/2
    },
    formSize: {
        width: containerForm
    },
    button: {
        borderRadius: $magicSizeOne,
        padding: $magicSizeOne,
        width: containerForm,
        marginTop: $magicSizeOne/2
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    btnEye: {
        position: 'absolute',
        top: $magicSizeOne * 6.1,
        right: $magicSizeOne * 2
    },
    iconEye: {
        width: $magicSizeOne,
        height: $magicSizeOne,
        tintColor: 'rgba(0,0,0,0.2)'
    },
    appName: {
        fontSize: $magicSizeOne,
        margin: $magicSizeOne
    }
})

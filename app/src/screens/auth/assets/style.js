import { StyleSheet } from 'react-native'
import { scaleVertical } from '@utils/scale'
import { Dimensions } from 'react-native'

const style = props => StyleSheet.create(props)

const containerForm = Dimensions.get('window').width - 17

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
        paddingHorizontal: 25,
        paddingBottom: scaleVertical(22),
        alignItems: 'center',
        flex: -1
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24)
    },
    save: {
        marginVertical: 9
    },
    formSize: {
        width: containerForm
    },
    button: {
        borderRadius: 20,
        padding: 17,
        width: containerForm,
        marginTop: 12
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    btnEye: {
        position: 'absolute',
        top: 70,
        right: 40
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)'
    }
})

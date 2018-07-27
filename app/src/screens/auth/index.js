import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import {
    Text,
    Keyboard,
    Dimensions,
    Image,
    View
  } from 'react-native'

import {
    RkButton,
    RkText,
    RkAvoidKeyboard,
    RkTextInput
} from 'react-native-ui-kitten'

import { login as style } from './assets/style'
import { scaleModerate } from '@utils/scale'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    _renderImage(image) {
        let contentHeight = scaleModerate(375, 1)
        let height = Dimensions.get('window').height - contentHeight
        let width = Dimensions.get('window').width

        image = (<Image style={[style.image, {height, width}]}
                          source={require('./assets/img/background.png')}/>)
        return image
      }

    render() {
        let image = this._renderImage()

        return (
            <RkAvoidKeyboard
            onStartShouldSetResponder={ (e) => true }
            onResponderRelease={ (e) => Keyboard.dismiss() }
            style={ style.screen }>
                { image }
                <View style={ style.container }>
                    <RkTextInput
                        rkType='rounded'
                        placeholder='Username'/>
                    <RkTextInput
                        rkType='rounded'
                        placeholder='Password'
                        secureTextEntry={true}/>
                    <RkButton
                        onPress={() => { this.props.navigation.goBack() }}
                        style={ style.button } rkType='primary'>
                        Login
                    </RkButton>
                </View>
            </RkAvoidKeyboard>
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)
(LoginScreen)
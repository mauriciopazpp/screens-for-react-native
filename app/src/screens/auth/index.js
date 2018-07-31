import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { login as style } from './assets/style'
import { scaleModerate } from '@utils/scale'
import eyeBlackImg from './assets/img/eye_black.png'
import backgroundImg from './assets/img/background.png'
//import { loginRedux } from './store/actions'
import {
    Text,
    Keyboard,
    Dimensions,
    Image,
    View,
    TouchableOpacity
} from 'react-native'
import {
    RkButton,
    RkAvoidKeyboard,
    RkTextInput
} from 'react-native-ui-kitten'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            passwordShowing: true,
            pressingShowPassword: false
        }
    }

    onSubmit() {
        //this.props.loginRedux(this.state.email, this.state.password)
        const { navigate: navigateTo } = this.props.navigation

        navigateTo('categories')
    }

    showPassword() {
        this.state.pressingShowPassword === false
            ? this.setState({ passwordShowing: false, pressingShowPassword: true })
            : this.setState({ passwordShowing: true, pressingShowPassword: false })
    }

    _renderImage(image) {
        let contentHeight = scaleModerate(375, 1)
        let height = Dimensions.get('window').height - contentHeight
        let width = Dimensions.get('window').width

        image = (<Image style={[style.image, {height, width}]}
                        source={ backgroundImg }/>)
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
                    <Text style={ style.appName }>
                        App name
                    </Text>
                    <RkTextInput
                        style={ style.formSize }
                        rkType='rounded'
                        placeholder='Username'
                        value={ this.state.email } />
                    <RkTextInput
                        style={ style.formSize }
                        rkType='rounded'
                        placeholder='Password'
                        secureTextEntry={true}
                        secureTextEntry={ this.state.passwordShowing }
                        value={ this.state.password }/>
                    <TouchableOpacity
                        activeOpacity={ 0.7 }
                        style={ style.btnEye }
                        onPress={ this.showPassword.bind(this) }>
                        <Image source={ eyeBlackImg } style={ style.iconEye } />
                    </TouchableOpacity>
                    <RkButton
                        onPress={() => { this.onSubmit.bind(this) }}
                        style={ style.button } rkType='primary'>
                        <Text style={ style.buttonText }>
                            Login
                        </Text>
                    </RkButton>
                </View>
            </RkAvoidKeyboard>
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

/* const matchDispatchToProps = dispatch => {
    return bindActionCreators({ loginRedux }, dispatch)
} */


export default connect(
    mapStateToProps,
    //matchDispatchToProps
)
(LoginScreen)

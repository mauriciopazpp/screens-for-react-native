import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import {
    View,
    Text
  } from 'react-native'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Login screen!</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)
(LoginScreen)
import React from 'react'
import { Provider as Redux } from 'react-redux'

import store from '@store'
import Main from './app/main'

export default class App extends React.Component {
  render() {
    return (
      <Redux store={ store }>
        <Main />
      </Redux>
    );
  }
}

AppRegistry.registerComponent('Application', () => Application)
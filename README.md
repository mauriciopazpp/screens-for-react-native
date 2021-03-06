### Screens for react-native with redux

## Screens

<div align="center">
  <img align="left" width="200" src="https://github.com/mauriciopazpp/screens-for-react-native/blob/master/app/screenshots/auth-mobile.png">

  <img align="left" width="200" src="https://github.com/mauriciopazpp/screens-for-react-native/blob/master/app/screenshots/tabs-mobile.png">

  <img align="left" width="200" src="https://github.com/mauriciopazpp/screens-for-react-native/blob/master/app/screenshots/list-mobile.png">
</div>


<br />

<h3 align="center">
  Available Scripts
</h3>


<br />

<p align="center">
  Cross Platform <a href="https://facebook.github.io/react-native/">React Native</a> UI Toolkit
</p>

<br />

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator.

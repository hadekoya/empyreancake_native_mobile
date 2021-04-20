# Empyrean Cake Native Mobile App

This is the mobile app codebase for NJ based Empyrean Cake. Implemented in React Native. App works on iOS and Android.

## Dependencies

- Yarn
- Expo
- `yarn global add expo-cli@3`

- `expo --version`
- JSON Server (local machine/development only)

`yarn global add json-server`

- Android Studio & AVD emulator (local machine/development only)

## Initial Setup

`expo init empyreancake_native_mobile --name empyreancake -t blank --yarn`

### Update to Locked Versions

- `yarn add expo@38`
- `expo install react@16.11.0 react-dom@16.11.0 react-native@https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz`

Check the package.json file in that folder to make sure that the version numbers listed there match those given above.

### Install React Native Elements (RNE).

This library provides us with many useful UI components.
From your integrated terminal in VS Code, which should be inside the empyreancake_native_mobile folder, enter:

- `expo install react-native-elements@2.2.1`

### Install React Navigation and its dependencies

- `expo install react-navigation@4`

- `expo install react-native-gesture-handler`

- `expo install react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view react-navigation-stack@^1.10.3`

### Install react-navigation-drawer

Enter the following command into your terminal, inside your project folder:

- `expo install react-navigation-drawer`

### Install custom React Native Date Time Picker

- `expo install @react-native-community/datetimepicker`

## Run App Locally

- `cd empyreancake_native_mobile`

- `expo start`

This will compile the project and then start serving the project through Expo at the URL exp://<Your Computer's IP address>:19000.

It will also automatically open a browser tab pointed to http://localhost:19002 -- this is the Expo DevTools. If you don't see it, go to http://localhost:19002 in your web browser.

You will not be able to access the project yet without connecting to it with an Android emulator or a mobile device

### Run Emulator

- Start Android Studio and launch the Android Virtual Device Manager

- Launch your phone emulator of choice

- Use expo to start the code base from your root directory
  `expo start`

- Browser will open at http://localhost:19002

- Click on run on Android device/emulator. Note that android emulators work on Mac and Windows while iOS emulator will only work on Mac

### Run JSON Server

- `cd empyreancake_native_mobile/json-server`

Start JSON Server for local APIs

- `json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000`

### Update config with local computer's IP Address

- `cd empyreancake_native_mobile/shared`

- Open baseURL.js with your favorite editor and replace 10.0.0.188 with your local machine's IP address

Find your local IP address on windows: `ipconfig` on Mac: `ipconfig getifaddr en0`

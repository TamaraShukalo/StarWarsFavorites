This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Star Wars Favorites Mobile Application

Mobile application for iOS & Android platforms that gives the ability to indicate the total amount of male/female/other favourite characters across the Star Wars Universe, along with additional information about each character.

# Getting Started

## Step 1: How to Setup

**1:** git clone this repo

**2:** cd to the cloned repo

**3:** Install the Application with `yarn`

**Extra step for IOS:** npx pod-install ios

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of React Native project. Run the following command to start _Android_ or _iOS_ app:

### For Android

- run `yarn android`

### For iOS

- run `yarn ios`

If everything is set up _correctly_, you should see app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# How to use the app

- To access extra information about any character, simply tap on their name in the list.

- Use the search bar to find characters by their names.

- To mark a character as a favorite, press an icon next to the character's name. Upon adding a character to favorites, the app will recalculate the total votes and indicate the selected character as the liked one. You can also undo this action if needed.

- The app will update the total counts of male, female, and other characters based on your selection.

- To start fresh, tap the "Clear Fans" button. This action will remove all characters previously added to the favorites list and reset all total values to zero.

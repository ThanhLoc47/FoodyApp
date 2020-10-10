/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Splash from './src/screens/SplashScreen';


const App: () => React$Node = () => {
  return (
    // <Splash />
    <LoginScreen />
  );
};


export default App;

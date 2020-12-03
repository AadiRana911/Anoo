/* eslint-disable prettier/prettier */
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
import {Fonts} from './src/utils/Fonts'
const App = () => {
  return (
    <View style = {{alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{fontFamily: Fonts.OSL}}>Hello World</Text>
    </View>

  );
};


export default App;

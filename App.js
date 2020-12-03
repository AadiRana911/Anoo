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
      <Text style = {{fontFamily: Fonts.OSB}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSBi}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSeB}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSeBi}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSI}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSL}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSLi}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSR}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSsB}}>Hello World</Text>
      <Text style = {{fontFamily: Fonts.OSsBi}}>Hello World</Text>
    </View>

  );
};


export default App;

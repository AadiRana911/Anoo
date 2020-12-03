/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {Fonts} from './src/utils/Fonts';

import Splash from './src/screens/Splash';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options = {{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Fonts} from './src/utils/Fonts';
import {colors} from './src/theme'
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Topic from './src/screens/Topic'
import Industry from './src/screens/Industry';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options = {{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options = {{headerShown: false}} />
        <Stack.Screen name="Topic" component={Topic} options = {{headerShown: false}} />
        <Stack.Screen name="Industry" component={Industry} options = {{headerShown: false}} />
        <Stack.Screen name="Tabs" component={Tabs} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options = {{headerShown: false}} />
      </Stack.Navigator>
  )
}

const SignupStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options = {{headerShown: false}} />
      </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Phone') {
            iconName = focused
              ? 'stopwatch'
              : 'stopwatch';
          } else if (route.name === 'Email') {
            iconName = focused ? 'calendar' : 'calendar';
          } 
          if (route.name === 'Phone') {
              return <Entypo name = {iconName} color = {color} size = {size}/>
          } else if (route.name === 'Email') {
              return <Foundation name = {iconName} color = {color} size = {size}/>
          }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      }}
    >
          <Tab.Screen name="Login" component={LoginStack} />
          <Tab.Screen name="Signup" component={SignupStack} />
      </Tab.Navigator>
  )
}

export default App;

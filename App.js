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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {Fonts} from './src/utils/Fonts';
import {colors} from './src/theme'
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Topic from './src/screens/Topic'
import Industry from './src/screens/Industry';
import EmailVerify from './src/screens/EmailVerify'
import PhoneVerify from './src/screens/PhoneVerify'
import Login from './src/screens/Login'
import PhoneOTP from './src/screens/PhoneOTP'
import GettingStarted from './src/screens/GettingStarted/GettingStarted';
import SetPassword from './src/screens/SetPassword/SetPassword';
import EmailLink from './src/screens/EmailLink'
import Search from './src/screens/Search';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
     //<Industry />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options = {{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options = {{headerShown: false}} />
        <Stack.Screen name="Topic" component={Topic} options = {{headerShown: false}} />
        <Stack.Screen name="Industry" component={Industry} options = {{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options ={{headerShown: false}} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} options ={{headerShown: false}} />
        <Stack.Screen name="SetPassword" component={SetPassword} options={{headerShown: false}} />
        <Stack.Screen name="Tabs" component={Tabs} options = {{headerShown: false}} />
        <Stack.Screen name="Search" component={Search} options = {{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const EmailStack = () => {
  return (
      <Stack.Navigator initialRouteName="EmailVerify">
          <Stack.Screen name="EmailVerify" component={EmailVerify} options = {{headerShown: false}} />
          <Stack.Screen name="EmailLink" component={EmailLink} options = {{headerShown: false}} />
          {/* <Stack.Screen name="WorkoutPlay" component={WorkoutPlay} options = {{headerShown: false}} /> */}
      </Stack.Navigator>
  )
}
const PhoneStack = () => {
return (
    <Stack.Navigator initialRouteName="PhoneVerify">
        <Stack.Screen name="PhoneVerify" component={PhoneVerify} options = {{headerShown: false}} />
        <Stack.Screen name="PhoneOTP" component={PhoneOTP} options = {{headerShown: false}} />
        {/* <Stack.Screen name="PlansNest" component={PlansNest} options = {{headerShown: false}} />
        <Stack.Screen name="Exercises" component={Exercises} options = {{headerShown: false}} />
        <Stack.Screen name="WorkoutPlay" component={WorkoutPlay} options = {{headerShown: false}} /> */}
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
)
}

const Tabs = () => {
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Email') {
            iconName = focused
              ? 'stopwatch'
              : 'stopwatch';
          } else if (route.name === 'Phone') {
            iconName = focused ? 'calendar' : 'calendar';
          }
          if (route.name === 'Email') {
              return <Entypo name = {iconName} color = {color} size = {size}/>
          } else if (route.name === 'Phone') {
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
          <Tab.Screen name="Email" component={EmailStack} />
          <Tab.Screen name="Phone" component={PhoneStack} />
      </Tab.Navigator>
  )
}
export default App;

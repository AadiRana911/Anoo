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
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

import {colors} from './src/theme';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Topic from './src/screens/Topic';
import Industry from './src/screens/Industry';
import EmailVerify from './src/screens/EmailVerify';
import PhoneVerify from './src/screens/PhoneVerify';
import Login from './src/screens/Login';
import PhoneOTP from './src/screens/PhoneOTP';
import GettingStarted from './src/screens/GettingStarted/GettingStarted';
import SetPassword from './src/screens/SetPassword/SetPassword';
import EmailLink from './src/screens/EmailLink';
import Search from './src/screens/Search';
import Notification from './src/screens/Notification';
import Chat from './src/screens/Chat/Chat';
import More from './src/screens/More';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
     //<Industry />
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Splash" component={Splash} options = {{headerShown: false}} /> */}
        <Stack.Screen name="GettingStarted" component={GettingStarted} options ={{headerShown: false}} />
        <Stack.Screen name="Topic" component={Topic} options = {{headerShown: false}} />
        <Stack.Screen name="Industry" component={Industry} options = {{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options ={{headerShown: false}} />
        <Stack.Screen name="SetPassword" component={SetPassword} options={{headerShown: false}} />
        <Stack.Screen name="Tabs" component={Tabs} options = {{headerShown: false}} />
        <Stack.Screen name="MainTabs" component={MainTabs} options = {{headerShown: false}} />
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

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options = {{headerShown: false}} />
        {/* <Stack.Screen name="EmailLink" component={EmailLink} options = {{headerShown: false}} /> */}
        {/* <Stack.Screen name="WorkoutPlay" component={WorkoutPlay} options = {{headerShown: false}} /> */}
    </Stack.Navigator>
  )
}

const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={Search} options = {{headerShown: false}} />
        {/* <Stack.Screen name="EmailLink" component={EmailLink} options = {{headerShown: false}} /> */}
        {/* <Stack.Screen name="WorkoutPlay" component={WorkoutPlay} options = {{headerShown: false}} /> */}
    </Stack.Navigator>
  )
}

const MoreStack = () => {
  return (
    <Stack.Navigator initialRouteName="More">
        <Stack.Screen name="More" component={More} options = {{headerShown: false}} />
        {/* <Stack.Screen name="EmailLink" component={EmailLink} options = {{headerShown: false}} /> */}
        {/* <Stack.Screen name="WorkoutPlay" component={WorkoutPlay} options = {{headerShown: false}} /> */}
    </Stack.Navigator>
  )
}

const MainTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search';
        } else if (route.name === 'Chat') {
          iconName = focused ? 'message' : 'message'
        } else if (route.name === 'Notification') {
          iconName = focused ? 'notifications' : 'notifications'
        } else if (route.name === 'More') {
          iconName = focused ? 'more-horizontal' : 'more-horizontal'
        }
        if (route.name === 'Home') {
            return <FontAwesome name = {iconName} color = {color} size = {size}/>
        } else if (route.name === 'Search') {
            return <Feather name = {iconName} color = {color} size = {size}/>
        } else if (route.name === 'Chat') {
            return <MaterialIcons name = {iconName} color = {color} size = {size}/>
        } else if (route.name === 'Notification') {
            return <MaterialIcons name = {iconName} color = {color} size = {size}/>
        } else if (route.name === 'More') {
            return <Feather name = {iconName} color = {color} size = {size}/>
        }

        // You can return any component that you like here!
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
    }}
  >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="More" component={MoreStack} />
    </Tab.Navigator>
  )
}
export default App;

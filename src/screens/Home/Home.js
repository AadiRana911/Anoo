/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import {Fonts} from '../../utils/Fonts'
const Home = () => {
    return (
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {{fontSize: 25, fontFamily: Fonts.OSeBi}}>Home Screen</Text>
        </View>
    )
}

export default Home

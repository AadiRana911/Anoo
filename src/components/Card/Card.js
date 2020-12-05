import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import {Fonts} from '../../utils/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Card = ({text, image, h, w,styles, onPress, fontSize, overlayFlag, br, backgroundColor}) => {
    return (
        <TouchableOpacity
            style = {[styles,{
                width: w,
                height: h,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: 8,
            }]}
            activeOpacity = {1}
            onPress = {onPress}
        >
            <View style = {{width: w, height: h, backgroundColor: backgroundColor, borderRadius: 8, justifyContent: 'center', alignItems: 'center'}}>
                <AntDesign name = "pluscircleo" style = {{position: 'absolute', fontSize: 16, color: 'black', alignSelf: 'flex-end', top: 5, right: 5,}} />
                <Text style = {{fontSize: 13, color: '#000000', fontFamily: Fonts.OSR, margin: 10}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

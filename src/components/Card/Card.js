import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import {Fonts} from '../../utils/Fonts';

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
                    <Text style = {{fontSize: 15, color: '#000000', fontFamily: Fonts.OSR, margin: 10}}>{text}</Text>
                </View>
        </TouchableOpacity>
    )
}

export default Card;

import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import {Fonts} from '../../utils/Fonts';

const Card = ({text, image, h, w,styles, onPress, fontSize, overlayFlag, br}) => {
    const {width, height} = Dimensions.get('window');
    return (
        <TouchableOpacity 
            style = {[styles,{
                width: w,
                height: h,
                alignItems: 'baseline',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: br === undefined ? 8 : br,
            }]}
            activeOpacity = {onPress !== undefined ? 0.5 : 1}
            onPress = {onPress}
        >
            <ImageBackground source = {image} style = {{width: w, height: h,}} imageStyle = {{borderRadius: br === undefined ? 8 : br}}>
                {overlayFlag === undefined && <View style = {{width: w, height: h, backgroundColor: 'rgba(236,236,236,0.69)', borderRadius: br === undefined ? 8 : br, justifyContent: 'center'}}>
                    <Text style = {{fontSize: fontSize === undefined ? 15 : fontSize, color: '#000000', fontFamily: Fonts.OSR, margin: 10}}>{text}</Text>
                </View>}
                {overlayFlag === true && <Text style = {{fontSize: fontSize === undefined ? 12 : fontSize, color: 'white'}}>{text}</Text>}
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default Card;

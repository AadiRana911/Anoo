import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import {Fonts} from '../../utils/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Brands = ({text, icon, styles, onPress, stars,}) => {
    const {width, height} = Dimensions.get('window');
    return (
        <TouchableOpacity
            style = {[styles,{
                width: 500,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 2,
                paddingVertical: 10,
            }
                
            ]}
            activeOpacity = {onPress !== undefined ? 0.5 : 1}
            onPress = {onPress}
        >
            <View style = {{borderBottomWidth: 2, flexDirection: 'row',}}>
            <Text style = {{fontSize: 20, color: 'grey', fontFamily: Fonts.OSsB, margin: 10,alignSelf: 'flex-start', justifyContent: 'flex-start'}}>{text}</Text>
            <MaterialIcons name = "navigate-next" style = {{justifyContent: 'flex-end', fontSize: 20, color: 'grey', alignSelf: 'flex-end', margin: 10}} />
            <Image src={icon} className='Brand-logo'></Image>
            </View>
        </TouchableOpacity>
    )
}

export default Brands;

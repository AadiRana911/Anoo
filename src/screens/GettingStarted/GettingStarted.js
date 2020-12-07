import React, {useState} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../theme';
import {Fonts} from '../../utils/Fonts';

const GettingStarted = ({navigation}) => {
    const {height} = Dimensions.get("screen");
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                animation='bounceIn' 
                source={require('../../assets/Webp.net-resizeimage.png')}>
                </Animatable.Image>
            </View>
            <Animatable.View animation='fadeInUpBig' style={styles.footer}>
                <Text style={styles.title}>Stay connected to the Anoo family!</Text>
                <Text style={styles.text}>Grouping you to professionals</Text>
                <View style={styles.button}> 
                <TouchableOpacity onPress={()=> navigation.navigate('Tabs')}>
                    <LinearGradient style={styles.signIn}
                     colors = {[colors.primary,'lightgreen']}>
                         <Text style={styles.textSign}>Getting Started</Text>
                         <MaterialCommunityIcons
                        name = {'arrow-right'}
                        color = {'white'}
                        style = {{fontSize: 25}}
                         />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default GettingStarted;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    title: {
        color: colors.headingColor,
        fontSize: 30,
        fontFamily: Fonts.OSsBi
    },
    text: {
        color: 'grey',
        marginTop: 5,
        fontFamily: Fonts.OSsBi
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 69
    },
    textSign: {
        color: 'white',
        fontFamily: Fonts.OSB
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    }
   
})

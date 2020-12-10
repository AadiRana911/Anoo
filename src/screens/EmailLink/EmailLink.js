import React, {useState} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../theme';

const EmailLink = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: colors.primary}}>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary}}>
                { <Text style={{fontSize: 30, color: 'white'}}>Register Now!</Text> }
            </View>
            <Animatable.View animation='fadeInUp'
            style={{flex: 1, backgroundColor: colors.secondary, borderTopLeftRadius: 69, borderTopRightRadius: 69, paddingVertical: 50, paddingHorizontal: 30}}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 40}}>
            <Text style={{fontSize: 20,}}>Check your Email</Text>
            <View style={{ alignItems: 'center'}}>
            <Text style={{fontSize: 15, padding: 1.5,}}>We have sent you a verification link</Text>
            </View>
            
            </View>
   
            
            <Text style={{justifyContent: 'center', alignSelf: 'center', marginTop: 10, marginBottom: 5}}>Verified?</Text>
            <TouchableOpacity style={{width: '100%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,borderRadius: 50,}}  onPress={() => navigation.navigate('SetPassword')}>
            <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                colors = {['lightgreen', colors.primary]}>
            <Text style={{color: 'white', fontSize: 19}}>L O G I N</Text>
            </LinearGradient>
            </TouchableOpacity>
            <Text style={{justifyContent: 'center', alignSelf: 'center', marginTop: 20, marginBottom: 5}}>Didn't get a verification link?</Text>
            <TouchableOpacity style={{width: '100%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,borderRadius: 50, marginTop: 10}}>
            <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                colors = {[colors.primary,'lightgreen']}>
            <Text style={{color: 'white', fontSize: 21}}>R E S E N D</Text>
            </LinearGradient>
            </TouchableOpacity> 
            
            </View>
            
            </Animatable.View>
        </View>
    )
}

export default EmailLink

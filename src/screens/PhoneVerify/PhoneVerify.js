import React, {useState} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../theme';
import {Fonts} from '../../utils/Fonts';



const PhoneVerify = ({navigation}) => {
    const {height} = Dimensions.get("screen");
    const [email, setEmail] = useState('');
    return(
        <View style={{flex: 1, backgroundColor: colors.primary}}>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary}}>
                { <Text style={{fontFamily: Fonts.OSB, fontSize: 30, color: 'white'}}>Register Now!</Text> }
            </View>
            <Animatable.View animation='fadeInUp'
            style={{flex: 1, backgroundColor: colors.secondary, borderTopLeftRadius: 69, borderTopRightRadius: 69, paddingVertical: 50, paddingHorizontal: 30}}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 40}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,}}>Create your account</Text>
            <View style={{ alignItems: 'center'}}>
            <Text style={{fontFamily: Fonts.OSL, fontSize: 15, padding: 1.5,}}>Register using your phone number</Text>
            </View>
            
            </View>
            <View style={{padding: 10,
            borderColor: 'black',
            borderRadius:10,
            borderWidth: 1,
            borderBottomWidth: 5,
            width:'100%',
            alignSelf: 'center',
            height:55,
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center'}}>
            <MaterialCommunityIcons
                name = {'login-variant'}
                color = {colors.primary}
                style = {{fontSize: 25}}
            />
            <TextInput style={{height: 50,
                marginLeft:16,
                borderBottomColor: '#FFFFFF',
                flex:1, fontFamily: Fonts.OSR}}
                placeholder="Phone"
                keyboardType="number-pad"
                underlineColorAndroid='transparent'
                onChangeText={(email) => setEmail(email)}
            />
            </View>
   
            <TouchableOpacity style={{width: '100%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,borderRadius: 50}} onPress={() => navigation.navigate('Topic', {email: email})}>
            <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                colors = {[colors.primary,'lightgreen']}>
            <Text style={{fontFamily: Fonts.OSeB, color: 'white', fontSize: 21}}>V E R I F Y</Text>
            </LinearGradient>
            </TouchableOpacity> 
            <Text style={{fontFamily: Fonts.OSR, justifyContent: 'center', alignSelf: 'center', marginTop: 10, marginBottom: 5}}>Already have an account?</Text>
            <TouchableOpacity style={{width: '100%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,borderRadius: 50,}}  onPress={() => navigation.navigate('Topic', {email: email})}>
            <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                colors = {['lightgreen', colors.primary]}>
            <Text style={{fontFamily: Fonts.OSeB, color: 'white', fontSize: 19}}>L O G I N</Text>
            </LinearGradient>
            </TouchableOpacity>
            
            </View>
            
            </Animatable.View>
        </View>
    )
}

export default PhoneVerify;

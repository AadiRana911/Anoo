import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {Fonts} from '../../utils/Fonts';
import {colors} from '../../theme';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');

    return(
        <View style={{flex: 1, }}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingVertical: 40}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,}}>Create your account</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontFamily: Fonts.OSL, fontSize: 15, padding: 1.5,}}>Your work email is</Text>
            <Text style={{color: 'red', fontFamily: Fonts.OSB}}> ONLY </Text>
            <Text>used for verification</Text>
            </View>
            
            </View>
            <View style={{padding: 10,
            borderBottomColor: 'lightgrey',
            backgroundColor: 'rgba(0,150,0,0.15)',
            borderRadius:10,
            borderBottomWidth: 1,
            width:'100%',
            alignSelf: 'center',
            height:55,
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center'}}>
            <MaterialCommunityIcons
                name = {'email'}
                color = {colors.primary}
                style = {{fontSize: 25}}
            />
            <TextInput style={{height: 50,
                marginLeft:16,
                borderBottomColor: '#FFFFFF',
                flex:1, fontFamily: Fonts.OSR}}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => setEmail(email)}
            />
            </View>
   
            <TouchableOpacity style={{width: '100%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,padding: 10,borderRadius: 7}} onPress={() => navigation.navigate('Industry', {email: email})}>
            <Text style={{fontFamily: Fonts.OSeB, color: 'white', fontSize: 20}}>V E R I F Y</Text>
            </TouchableOpacity>
            
            <Text style={{textDecorationLine: 'underline', fontSize: 20, marginTop: 10 }}>Why work email?</Text> 
            </View>
            <View style={{flex: 0.25}}>
            <Text style={{marginHorizontal: 20}}>By creating an account, you agree to our Terms of Use and Privacy Policy.</Text>      
            <View style={{ paddingHorizontal: 20, height: 80, justifyContent: 'center', borderTopWidth: 1, borderTopColor: colors.primary, position: 'absolute', bottom: 0, left: 0, right: 0}}>
            <View style={{flexDirection: 'row'}}>
            <Text>Already have an accoun?</Text>
            <Text style={{color: colors.primary}}> Login</Text>
            </View>
            </View>
            </View>
                
        </View>
    )
}

export default SignUp
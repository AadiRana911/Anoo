import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {Fonts} from '../../utils/Fonts';
import {colors} from '../../theme';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingVertical: 40}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,}}>Welcome back to Anoo</Text>
            
            </View>
            <View style={{padding: 10,
            borderBottomColor: 'lightgrey',
            backgroundColor: 'rgba(0,150,0,0.15)',
            borderRadius:15,
            borderBottomWidth: 1,
            width:'100%',
            alignSelf: 'center',
            height:60,
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
            <View style={{padding: 10,
            borderBottomColor: 'lightgrey',
            backgroundColor: 'rgba(0,150,0,0.15)',
            borderRadius:15,
            borderBottomWidth: 1,
            width:'100%',
            alignSelf: 'center',
            height:60,
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center'}}>
            <MaterialCommunityIcons
                name = {'lock'}
                color = {colors.primary}
                style = {{fontSize: 25}}
            />
            <TextInput 
                placeholder="Confirm Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => setPassword(password)}
                />
            </View>
   
            <TouchableOpacity style={{width: '100%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,padding: 10,borderRadius: 7}} onPress={() => navigation.navigate('Topic')}>
            <Text style={{fontFamily: Fonts.OSeB, color: 'white', fontSize: 20}}>L O G I N</Text>
            </TouchableOpacity>
            
            <Text style={{textDecorationLine: 'underline', fontSize: 16, color: 'grey', marginTop: 10 }}>Forgot password?</Text> 
            </View>
            
            <View style={{ paddingHorizontal: 20, height: 80, justifyContent: 'center', borderTopWidth: 1, borderTopColor: colors.primary, position: 'absolute', bottom: 0, left: 0, right: 0}}>
            <View style={{flexDirection: 'row'}}>
            <Text>New to Anoo?</Text>
            <Text onPress={() => navigation.navigate('SignUp')} style={{color: colors.primary}}> Sign Up</Text>
            </View>
            </View>
            
                
        </View>
    )
}

export default Login
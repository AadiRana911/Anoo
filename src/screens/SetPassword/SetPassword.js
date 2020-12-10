import React, {useState} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../theme';

const SetPassword = ({navigation}) => {
    const {height} = Dimensions.get("screen");
    const [password, setPassword]= useState('');
    const [repassword, setRepassword] = useState('');
    const [icon, setIcon] = useState('eye-off');
    const [reIcon, setReIcon] = useState('eye-off');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [reSecureTextEntry, setReSecureTextEntry] = useState(true);
    return (
        <View style={styles.container}>
           <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary}}>
                { <Text style={{fontSize: 30, color: 'white'}}>Set Password</Text> }
            </View>
            <Animatable.View animation='fadeInUp'
            style={{flex: 1, backgroundColor: colors.secondary, borderTopLeftRadius: 69, borderTopRightRadius: 69, paddingVertical: 50, paddingHorizontal: 10}}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{fontSize: 20, paddingBottom: 25}}>Just a few steps way</Text>
            <Text style={{fontSize: 10, paddingBottom: 5 }}>Your password must contain a special character, a number and atleast 8 digits.</Text>
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
                name = {'lock'}
                color = {colors.primary}
                style = {{fontSize: 25}}
            />
                <TextInput
                    style={{height: 50,
                    marginLeft:16,
                    borderBottomColor: '#FFFFFF',
                    flex:1, }}
                    placeholder = {'Password'}
                    secureTextEntry = {secureTextEntry}
                    placeholderTextColor = {'gray'}
                    onChangeText = {(text) => setPassword(text)}
                />
                <Feather 
                    name = {icon}
                    style = {{color: 'black', fontSize: 20}}
                    onPress = {() => {
                        setSecureTextEntry(!secureTextEntry)
                        if(icon === 'eye'){
                            setIcon('eye-off');
                        }else{
                            setIcon('eye');
                        }
                    }}
                />
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
                name = {'lock'}
                color = {colors.primary}
                style = {{fontSize: 25}}
            />
                <TextInput
                    style={{height: 50,
                    marginLeft:16,
                    borderBottomColor: '#FFFFFF',
                    flex:1, }}
                    placeholder = {'Re-enter Password'}
                    secureTextEntry = {reSecureTextEntry}
                    placeholderTextColor = {'gray'}
                    onChangeText = {(text) => setPassword(text)}
                />
                <Feather 
                    name = {reIcon}
                    style = {{color: 'black', fontSize: 20}}
                    onPress = {() => {
                        setReSecureTextEntry(!reSecureTextEntry)
                        if(reIcon === 'eye'){
                            setReIcon('eye-off');
                        }else{
                            setReIcon('eye');
                        }
                    }}
                />
            </View>

   
            <TouchableOpacity style={{width: '80%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,borderRadius: 50}} onPress={() => navigation.navigate('Industry')}>
            <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                colors = {[colors.primary,'lightgreen']}>
            <Text style={{color: 'white', fontSize: 21}}>C O N F I R M</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>
            
            </Animatable.View>
        </View>
    )
}

export default SetPassword;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
   
})


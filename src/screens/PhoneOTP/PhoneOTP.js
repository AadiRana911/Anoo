import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { colors } from '../../theme';
import {Fonts} from '../../utils/Fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

const PhoneOTP = ({navigation}) => {
    let textInput = useRef(null)
    const lengthInput = 6
    let clockCall = null;
    const defaultCounter = 5
    const [internalVal, setInternalVal] = useState('')
    const {height} = Dimensions.get("screen");
    // const [email, setEmail] = useState('');
    const [counter, setCounter] = useState(defaultCounter)
    const [enableResend, setEnableResend] = useState(false);
    useEffect(() => {
        clockCall = setInterval(() => {
            decrementCounter()
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    })
    const decrementCounter = () => {
        if(counter === 0){
            setEnableResend(true)
            setCounter(0)
            clearInterval(clockCall)
        }else{
            setCounter(counter-1)
        }
    }
        
    const onResendOTP = () => {
        if(enableResend){
            setCounter(defaultCounter)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInterval(() => {
                decrementCounter()
            }, 1000)
        }
    }

    useEffect(() => {
        textInput.focus();
    },[navigation])
    return(
        <KeyboardAwareScrollView style={{flex: 1, backgroundColor: colors.primary}} contentContainerStyle = {{flexGrow: 1}}>
            <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary}}>
                { <Text style={{fontFamily: Fonts.OSB, fontSize: 30, color: 'white'}}>Register Now!</Text> }
            </View>
            <Animatable.View animation='fadeInUp'
            style={{flex: 1, backgroundColor: colors.secondary, borderTopLeftRadius: 69, borderTopRightRadius: 69, paddingVertical: 50, paddingHorizontal: 10}}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 40}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,}}>Waiting for OTP</Text>
            <View style={{ alignItems: 'center', width: '100%'}}>
            <Text style={{fontFamily: Fonts.OSL, fontSize: 14, padding: 1.5,}}>Please wait while we fetch OTP from your device</Text>
            </View>
            
            </View>
            <View 
            style={{
                // padding: 10,
            // marginHorizontal: 20,
            // borderColor: 'rgba(120, 120, 120, 0.1)',
            // backgroundColor: 'rgba(100, 100, 100, 0.05)',
            // borderRadius:10,
            // borderWidth: 1,
            // borderBottomWidth: 1,
            // width:'15%',
            // alignSelf: 'center',
            // height:55,
            marginBottom:40,
            // flexDirection: 'row',
            // alignItems:'center'
            }}
            >
            
            <TextInput style={{height: 0, width: 0,
                borderBottomColor: '#FFFFFF',
                flex:1, fontFamily: Fonts.OSB, fontSize: 20}}
                ref = {(input) => textInput = input}
                keyboardType="number-pad"
                underlineColorAndroid='transparent'
                value = {internalVal}
                maxLength = {lengthInput}
                onChangeText={(val) => {
                    setInternalVal(val)
                    console.log(internalVal)
                }}
            />
            <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {
                    Array(lengthInput).fill().map((data, index) => (
                        <View key = {index.toString()} style = {{paddingVertical: 11, width: 40, margin: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(100, 100, 100, 0.1)', borderRadius: 10}}>
                            <Text style = {{textAlign: 'center', fontSize: 16, fontFamily: Fonts.OSB}}>
                                {/* {internalVal && internalVal.length >= 0 ? internalVal[index] : ""} */}
                                {internalVal[index]}
                            </Text>
                        </View>
                    ))
                }
                
            </View>
            <View style = {{width: 290, alignSelf: 'center', }}>
                {enableResend === false && <Text style={{fontFamily: Fonts.OSR, marginTop: 7, color: 'red', alignSelf: 'flex-end'}}>ResendOTP({counter})</Text>}
                {enableResend === true && <Animatable.View style = {{width: '100%'}} animation='fadeInRight'>                    
                    <Text style={{fontFamily: Fonts.OSR, color: 'black', fontSize: 16, alignSelf: 'flex-end', color: colors.primary, marginTop: 7}} onPress = {onResendOTP}>Resend OTP</Text>
                </Animatable.View>
                }
            </View>
            </View>
            
            <TouchableOpacity style={{width: '90%',alignSelf: 'center',height: 50,justifyContent: 'center' ,alignItems: "center",backgroundColor: colors.primary,borderRadius: 50}} onPress={() => navigation.navigate('Topic')}>
            <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                colors = {[colors.primary,'lightgreen']}>
            <Text style={{fontFamily: Fonts.OSeB, color: 'white', fontSize: 21}}>V E R I F Y</Text>
            </LinearGradient>
            </TouchableOpacity>
            </View>
            
            </Animatable.View>
        </KeyboardAwareScrollView>
    )
}

export default PhoneOTP;

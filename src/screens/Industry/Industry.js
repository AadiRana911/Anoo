/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

import {Fonts} from '../../utils/Fonts';
import Card from '../../components/Card/Card';




const Industry = () => {
    const {height, width} = Dimensions.get('window');
    return(
        <ScrollView>
            <View style={{padding: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,padding: 1.5,}}>Pick relevent industries</Text>
            <Text style={{fontFamily: Fonts.OSL, fontSize: 15, padding: 1.5,}}>Choose 3 or more to get the best options.</Text>
            </View>
        <ScrollView style={{padding: '2%', height: '100%', backgroundColor: '#ffffff'}}>
        <View style = {{ flexDirection: 'row', margin: 3, justifyContent: 'space-evenly'}}>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Tech +'}/>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Hardware +'}/>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'E-Commerce and Retail +'}/>
            </View>
        <View style = {{ flexDirection: 'row', margin: 5.1, justifyContent: 'space-evenly'}}>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Gaming +'}/>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Media & Entertainment +'}/>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Telecom +'}/>
            </View>
        <View style = {{ flexDirection: 'row', margin: 5.1, justifyContent: 'space-evenly'}}>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Finance +'}/>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Health +'}/>
            <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Auto +'}/>
            </View>
        </ScrollView>
        <View style={{paddingTop: '70%'}}>
        <Button title= "Next" color = '#8fbc8f' />
        </View>
        </ScrollView>
        
    )
  
}

export default Industry
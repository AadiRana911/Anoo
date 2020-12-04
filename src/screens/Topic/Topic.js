/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

import {Fonts} from '../../utils/Fonts';
import Card from '../../components/Card/Card';

const Topic = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    const [cards, setCards] = useState([
        {
            name: 'Software Engineering',
            color: 'tomato',
        },
        {
            name: 'Hardware Engineering',
            color: 'red',
        },
        {
            name: 'Data Science & Analytics',
            color: 'red',
        },
        {
            name: 'Information Technology',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        {
            name: 'Software Engineering',
            color: 'red',
        },
        
    ])
    return(
        <View style = {{flex: 1}}>
            <View style={{padding: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,padding: 1.5,}}>Choose your fields of interest</Text>
            <Text style={{fontFamily: Fonts.OSL, fontSize: 15, padding: 1.5,}}>This will help customize your feed.</Text>
            </View>
            <ScrollView style={{flex: 1}} contentContainerStyle = {{flexGrow: 1}}>
            <View style = {{ flexDirection: 'row', margin: 3, justifyContent: 'space-evenly'}}>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Software Engineering +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Hardware Engineering +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Data Science & Analytics +'}/>
                </View>
            <View style = {{ flexDirection: 'row', margin: 5.1, justifyContent: 'space-evenly'}}>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Information Technology +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Security +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Product Management +'}/>
                </View>
            <View style = {{ flexDirection: 'row', margin: 5.1, justifyContent: 'space-evenly'}}>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Communications +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Business Development +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Operations +'}/>
                </View>
            <View style = {{ flexDirection: 'row', margin: 5.1, justifyContent: 'space-evenly'}}>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Supply Chain +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Customer Service +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Human Resources +'}/>
                </View>
            <View style = {{ flexDirection: 'row', margin: 5.1, justifyContent: 'space-evenly'}}>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Legal +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Admin +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Corporate Finance +'}/>
                </View>
            <View style = {{ flexDirection: 'row', margin: 5.1, justifyContent: 'space-evenly'}}>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Legal +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Admin +'}/>
                <Card h = {height/7.9} w = {(width/3.2 )-8} text = {'Corporate Finance +'}/>
                </View>
            </ScrollView>
            <View>
                <Button title= "Next" color = '#8fbc8f' onPress={() => navigation.navigate('Industry')} />
            </View>
        </View>
        
    )
  
}

export default Topic
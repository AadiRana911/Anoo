/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Button, FlatList } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import {colors} from '../../theme'

import {Fonts} from '../../utils/Fonts';
import Card from '../../components/Card/Card';

const Topic = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    const [selected, setSelected] = useState([]);
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
            name: 'Security',
            color: 'red',
        },
        {
            name: 'Product Management',
            color: 'red',
        },
        {
            name: 'Communications',
            color: 'red',
        },
        {
            name: 'Business Development',
            color: 'red',
        },
        {
            name: 'Operations',
            color: 'red',
        },
        {
            name: 'Supply Chain',
            color: 'red',
        },
        {
            name: 'Customer Service',
            color: 'red',
        },
        {
            name: 'Human Resources',
            color: 'red',
        },
        {
            name: 'Legal',
            color: 'red',
        },
        {
            name: 'Admin',
            color: 'red',
        },
        {
            name: 'Corporate Finance',
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
    const RenderFlatList = ({text, color}) => {
        const [isPressed, setIsPressed] = useState(false)
        return(
            <Card h = {height/7.9} w = {(width/3.2 )-10} backgroundColor = {isPressed === true ? color : 'rgba(236,236,236,0.69)'} styles = {{marginHorizontal: 10, marginVertical: 8}} text = {text} onPress = {() => {
                setIsPressed(!isPressed);
                var temp = selected;
                temp.push(text);
                setSelected(temp);
            }}/>
        )   
    }
    return(
        <View style = {{flex: 1}}>
            <View style={{padding: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,padding: 1.5,}}>Choose your fields of interest</Text>
            <Text style={{fontFamily: Fonts.OSL, fontSize: 15, padding: 1.5,}}>This will help customize your feed.</Text>
            </View>
            <FlatList 
                data = {cards}
                style = {{flex: 1, backgroundColor: 'white'}}
                contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}
                keyExtractor = {(item, index) => index.toString()}
                horizontal = {false}
                numColumns = {3}
                renderItem = {({item}) => {
                    return(
                        <RenderFlatList text = {item.name} color = {item.color} />
                    )
                }}
            />
            <View>
                <Button title= "Next" color = {colors.primary} onPress={() => navigation.navigate('Industry')} />
            </View>
        </View>
        
    )
  
}

export default Topic
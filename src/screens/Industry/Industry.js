/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Button, FlatList } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';

import {Fonts} from '../../utils/Fonts';
import Card from '../../components/Card/Card';
import {colors} from '../../theme'

const Industry = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    const [selected, setSelected] = useState([]);
    const [cards, setCards] = useState([
        {
            name: 'Tech',
            color: 'pink',
        },
        {
            name: 'Hardware',
            color: 'lightblue',
       },
        {
            name: 'E-commerce and Retail',
            color: 'aquamarine',
        },
        {
            name: 'Gaming',
            color: 'cornflowerblue',
        },
        {
            name: 'Media & Entertainment',
            color: 'lemonchiffon',
        },
        {
            name: 'Telecomm',
            color: 'lightpink',
        },
        {
            name: 'Finance',
            color: 'thistle',
        },
        {
            name: 'Health',
            color: 'lightgreen',
        },
        {
            name: 'Auto',
            color: 'lightsalmon',
        },
        {
            name: 'Aviation',
            color: 'plum',
        },
    ])
    const RenderFlatList = ({text, color}) => {
        const [isPressed, setIsPressed] = useState(false)
        return(
            <Card h = {height/7.9} w = {(width/3.2 )-10} backgroundColor = {isPressed === true ? color : 'rgba(236,236,236,0.69)'} styles = {{margin: 10}} text = {text} onPress = {() => {
                setIsPressed(!isPressed);
                var temp = selected;
                temp.push(text);
                setSelected(temp);
            }}/>
        )
        
    }
    return(
        <View style = {{flex: 1, backgroundColor: 'white'}}>
            <View style={{padding: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{fontFamily: Fonts.OSB, fontSize: 20,padding: 1.5,}}>Pick relevant industries</Text>
            <Text style={{fontFamily: Fonts.OSL, fontSize: 15, padding: 1.5,}}>Choose 3 or more to get the best options.</Text>
            </View>
            <FlatList
                data = {cards}
                keyExtractor = {(item, index) => index.toString()}
                horizontal = {false}
                style = {{backgroundColor: 'white'}}
                numColumns = {3}
                contentContainerStyle = {{alignItems: 'center'}}
                renderItem = {({item, index}) => {
                    console.log(item)
                    return(
                        <RenderFlatList text = {item.name} color = {item.color} />
                    )
                }}
            />
            <View style = {{position: 'absolute', left: 0, right: 0, bottom: 0}}>
                <Button title= "Next" color = {colors.primary} onPress={() => {
                    if (selected.length > 0)
                        navigation.navigate('Home')
                }} />
            </View>
        </View>
        
    )
  
}

export default Industry
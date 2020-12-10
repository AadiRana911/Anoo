/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Button, FlatList } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen';
import {colors} from '../../theme'

import Card from '../../components/Card/Card';

const Topic = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    const [selected, setSelected] = useState([]);
    const [cards, setCards] = useState([
        {
            name: 'Software Engineering',
           // color: colors.primary,
        },
        {
            name: 'Hardware Engineering',
            //color: 'lightgreen',
        },
        {
            name: 'Data Science & Analytics',
            //color: 'lightgrey',
        },
        {
            name: 'Information Technology',
            //color: 'lightgrey',
        },
        {
            name: 'Security',
            //color: colors.primary,
        },
        {
            name: 'Product Management',
            //color: 'lightgreen',
        },
        {
            name: 'Communications',
            //color: 'lightgreen',
        },
        {
            name: 'Business Development',
            //color: 'lightgrey',
        },
        {
            name: 'Operations',
            //color: colors.primary,
        },
        {
            name: 'Supply Chain',
            //color: colors.primary,
        },
        {
            name: 'Customer Service',
            //color: 'lightgreen',
        },
        {
            name: 'Human Resources',
            //color: 'lightgrey',
        },
        {
            name: 'Legal',
            //color: 'lightgrey',
        },
        {
            name: 'Admin',
            //color: colors.primary,
        },
        {
            name: 'Corporate Finance',
            //color: 'lightgreen',
        },
        {
            name: 'Software Engineering',
            //color: 'lightgreen',
        },
        {
            name: 'Software Engineering',
            //color: 'lightgrey',
        },
        {
            name: 'Software Engineering',
            //color: colors.primary,
        },
        
    ])
    useEffect(() => {
        console.log(selected.length)
    }, [selected])
    const RenderFlatList = ({text, color}) => {
        const [isPressed, setIsPressed] = useState(false)
        return(
            <Card h = {height/12} w = {(width/3 )-20} color={isPressed === true ? 'white' : 'black'} borderColor={isPressed === true ? color : 'black'} backgroundColor = {isPressed === true ? color : 'white'} styles = {{marginHorizontal: 10, marginVertical: 8}} text = {text} onPress = {() => {
                setIsPressed(!isPressed);
                var temp = selected;
                if(!temp.includes(text)){
                    temp.push(text);
                }
                setSelected(temp);
                console.log(selected.length)
            }}/>
        )   
    }
    return(
        <View style = {{flex: 1}}>
            <View style={{padding: '8%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{fontSize: 20,padding: 1.5,}}>Choose your fields of interest</Text>
            <Text style={{fontSize: 15, padding: 1.5,}}>This will help customize your feed.</Text>
            </View>
            <FlatList 
                data = {cards}
                style = {{flex: 1, backgroundColor: 'white', marginBottom: 40}}
                contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}
                keyExtractor = {(item, index) => index.toString()}
                horizontal = {false}
                numColumns = {3}
                renderItem = {({item}) => {
                    console.log(selected.length)
                    return(
                        <RenderFlatList text = {item.name} color = {colors.primary} />
                    )
                }}
            />
            <View style = {{position: 'absolute', left: 0, right: 0, bottom: 0}}>
                <Button title= "Next" color = {colors.primary} onPress={() => {
                    if (selected.length > 0)
                        navigation.navigate('MainTabs')
                }} />
            </View>
        </View>
        
    )
  
}

export default Topic
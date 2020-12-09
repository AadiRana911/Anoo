import React, {useState} from 'react';
import {View, Text, Dimensions, TextInput, StyleSheet, Image, FlatList} from 'react-native';
import {Header, Divider} from 'react-native-elements';
import Chatting from '../../components/Chatting';
import {List, ListItem} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Card from '../../components/Card/Card';
import {colors} from '../../theme';
import {Fonts} from '../../utils/Fonts';
import Brands from '../../components/List/Brands';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const Item = ({ item, onPress, style}) => (
//     <TouchableOpacity onPress={onPress} style={[style, styles.item]}>
//         <Text style={styles.textSign}{...item.name}></Text>

//     </TouchableOpacity>
// );

const Chat = () => {
    const {height, width} = Dimensions.get('window');
    const [selectedId, setSelectedId] = useState([]);
    const [data, setData] = useState([
        {
            name: 'Asad',
            id: '1',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Anna',
            id: '2',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Smith',
            id: '3',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'John',
            id: '4',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Jude',
            id: '5',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Peter',
            id: '6',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Jack',
            id: '7',
            date: 'Nov 28',
           image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Me',
            id: '8',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Varda',
            id: '9',
            date: 'Nov 28',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
    ])
    return(
        <View style = {{flex: 1, paddingBottom: 10, backgroundColor: 'rgba(200, 200, 200, 0.6)'}}>
            <Header
                containerStyle={{height: 100, paddingHorizontal: 10, borderRadius: 5}}
                backgroundColor = {colors.primary}
                leftComponent={<Image source={require('../../assets/dev-jane-01.jpg')} style={{height: height/15, width: width/8, borderRadius: 50}}></Image>}
                centerComponent = {<Text style = {{color: 'white', fontFamily: Fonts.OSeB, fontSize: 22}}>Chats</Text>}
            />
            <View style = {{flex: 1}}>
            <View style={{padding: 10,
                borderColor: 'grey',
                borderRadius:20,
                borderWidth: 1,
                borderBottomWidth: 3,
                alignSelf: 'center',
                width:'90%',
                height: 40,
                marginVertical:10,
                flexDirection: 'row',
                alignItems:'center',}}>
                <MaterialIcons
                    name = {'search'}
                    color = {colors.primary}
                    style = {{fontSize: 25}}
                />
                <TextInput style={{height: 50,
                    marginLeft:16,
                    borderBottomColor: '#FFFFFF',
                    flex:1, fontFamily: Fonts.OSR}}
                    placeholder="Search for contact"
                    underlineColorAndroid='transparent'
                />
                </View>
                <View style = {{flex: 1}}>
                <FlatList 
                    data = {data}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {({item}) => {
                        return(
                            <Chatting 
                            name ={item.name}
                            image={item.image.uri}
                            date={item.date} />
                        )
                    }}
                />
                </View>
            </View>
        </View>
    )}
    export default Chat
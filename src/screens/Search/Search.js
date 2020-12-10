import React, {useState} from 'react';
import {View, Text, Dimensions, TextInput, StyleSheet, Image, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import Card from '../../components/Card/Card';
import {colors} from '../../theme';
import Brands from '../../components/List/Brands';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const Item = ({ item, onPress, style}) => (
//     <TouchableOpacity onPress={onPress} style={[style, styles.item]}>
//         <Text style={styles.textSign}{...item.name}></Text>

//     </TouchableOpacity>
// );

const Search = () => {
    const {height, width} = Dimensions.get('window');
    const [selectedId, setSelectedId] = useState([]);
    const [brands, setBrands] = useState([
        {
            name: 'Google',
            id: '1',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Auth0',
            id: '2',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Facebook',
            id: '3',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Stripe',
            id: '4',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Salesforce',
            id: '5',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'TikTok',
            id: '6',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Uber',
            id: '7',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Airbnb',
            id: '8',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
        {
            name: 'Lyft',
            id: '9',
            image: {uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
        },
    ])
    // const renderItem = ({item}) => {
    //     const backgroundColor = item.id === selectedId ? 'lightgrey' : 'white';
    //     return (
    //         <Item 
    //         item={item}
    //         onPress={() => selectedId(item.id)}
    //         style={{backgroundColor}} />
    //     );
    // };
   
    const RenderFlatList = ({text, image}) => {
        const [isPressed, setIsPressed] = useState(false)
        console.log('=>', image)
        return(
            <Brands color={'grey'} styles = {{margin: 10}} text = {text} image = {image.uri}
            />
        )
        
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Animatable.Image
                animation='bounceIn' 
                source={require('../../assets/logo-grey-scale.png')}>
                </Animatable.Image>
            </View>
            <View style={styles.footer}>
                <View style={styles.searchbox}>
                <MaterialIcons
                    name = {'search'}
                    color = {colors.primary}
                    style = {{fontSize: 25}}
                />
                <TextInput style={{height: 50,
                    marginLeft:16,
                    borderBottomColor: '#FFFFFF',
                    flex:1}}
                    placeholder="Search for brands"
                    underlineColorAndroid='transparent'
                />
                </View>
                <Text style={styles.text}>Most Searched</Text>
                {/* <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{backgroundColor: 'tomato'}}
                extraData={selectedId} /> */}
                <FlatList
                data = {brands}
                keyExtractor = {(item) => item.id}
                horizontal = {false}
                showsVerticalScrollIndicator = {false}
                //style = {{backgroundColor: 'tomato'}}
                numColumns = {1}
                contentContainerStyle = {{alignItems: 'flex-start'}}
                renderItem = {({item, index}) => {
                    console.log(item.image)
                    return(
                        <RenderFlatList text = {item.name} image = {item.image} />
                    )
                }}
            /> 
            </View>
        </View>
    )
}
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    header: {
        flex: 1,
        margin: 20,
        alignItems: 'flex-end',
    },
    footer: {
        flex: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 200,
        paddingVertical: 50,
        paddingHorizontal: 10,
    },
    searchbox: {
        padding: 10,
        borderColor: 'lightgrey',
        borderRadius:50,
        borderWidth: 1,
        borderBottomWidth: 3,
        width:'70%',
        height: 40,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',

    },
    title: {
        color: colors.headingColor,
        fontSize: 30,
        
    },
    text: {
        color: 'grey',
        paddingHorizontal: 10,
        paddingBottom: 10,
        
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 69
    },
    textSign: {
        color: 'white',
        
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    }
   
})

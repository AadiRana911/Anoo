import React, {useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import {Fonts} from '../../utils/Fonts'
import {Header, Divider} from 'react-native-elements';
import {colors} from '../../theme';
import Notify from '../../components/Notify';
import HomeItem from '../../components/HomeItem'

const Notification = () => {
    const [data, setData] = useState([
        {
            tag: 'Software',
            title: 'Abracadabra',
            time: "12m",
            
        },
        {
            tag: 'Software',
            title: 'Abracadabra',
            time: "9h",
        },
        {
            tag: 'Software',
            title: 'Abracadabra',
            time: "12m",
        },
        {
            tag: 'Software',
            title: 'Abracadabra',
            time: "12m",
        },
        {
            tag: 'Software',
            title: 'Abracadabra',
            time: "12m",
        },
        
    ])
    return (
        <View style = {{flex: 1, paddingBottom: 10, backgroundColor: 'rgba(200, 200, 200, 0.6)'}}>
            <Header
                backgroundColor = {colors.primary}
                centerComponent = {<Text style = {{color: 'white', fontFamily: Fonts.OSeB, fontSize: 22}}>Notifications</Text>}
            />
            <View style = {{flex: 1}}>
                <FlatList 
                    data = {data}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {({item}) => {
                        return(
                            <Notify
                                tag = {item.tag}
                                title = {item.title}
                                time= {item.time}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Notification

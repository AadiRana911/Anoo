import React, {useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import {Header, Divider} from 'react-native-elements';
import {colors} from '../../theme'
import HomeItem from '../../components/HomeItem'
// import HeaderCenterComponent from '../../components/header/HeaderCenterComponent';
// import HeaderRightComponent from '../../components/header/HeaderRightComponent';
// import HeaderLeftComponent from '../../components/header/HeaderLeftComponent'
const Home = () => {
    const [data, setData] = useState([
        {
            tag: 'ABC',
            title: 'Abracadabra',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            hashtags: ["ABC", "DEF", "GHI", "JKL", "MNO"],
            likes: 15,
            comments: 20,
            seen: 70,
            time: "12m",
            worksAt: 'EY',
            postedBy: 'qyetsg',
            location: 'Amazon, Microsoft, Salesforce'
        },
        {
            tag: 'ABC',
            title: 'Abracadabra',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            hashtags: ["ABC", "DEF", "GHI", "JKL", "MNO"],
            likes: 15,
            comments: 20,
            seen: 70,
            time: "12m",
            worksAt: 'EY',
            postedBy: 'qyetsg',
            location: 'Amazon, Microsoft, Salesforce'
        },
        {
            tag: 'ABC',
            title: 'Abracadabra',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            hashtags: ["ABC", "DEF", "GHI", "JKL", "MNO"],
            likes: 15,
            comments: 20,
            seen: 70,
            time: "12m",
            worksAt: 'EY',
            postedBy: 'qyetsg',
            location: 'Amazon, Microsoft, Salesforce'
        },
        {
            tag: 'ABC',
            title: 'Abracadabra',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            hashtags: ["ABC", "DEF", "GHI", "JKL", "MNO"],
            likes: 15,
            comments: 20,
            seen: 70,
            time: "12m",
            worksAt: 'EY',
            postedBy: 'qyetsg',
            location: 'Amazon, Microsoft, Salesforce'
        },
        {
            tag: 'ABC',
            title: 'Abracadabra',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            hashtags: ["ABC", "DEF", "GHI", "JKL", "MNO"],
            likes: 15,
            comments: 20,
            seen: 70,
            time: "12m",
            worksAt: 'EY',
            postedBy: 'qyetsg',
            location: 'Amazon, Microsoft, Salesforce'
        },
        {
            tag: 'ABC',
            title: 'Abracadabra',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            hashtags: ["ABC", "DEF", "GHI", "JKL", "MNO"],
            likes: 15,
            comments: 20,
            seen: 70,
            time: "12m",
            worksAt: 'EY',
            postedBy: 'qyetsg',
            location: 'Amazon, Microsoft, Salesforce'
        },
        
    ])
    return (
        <View style = {{flex: 1, paddingBottom: 10, backgroundColor: 'rgba(200, 200, 200, 0.6)'}}>
            <Header
                backgroundColor = {colors.primary}
                centerComponent = {<Text style = {{color: 'white', fontSize: 22}}>Topics</Text>}
            />
            <View style = {{flex: 1}}>
                <FlatList 
                    data = {data}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {({item}) => {
                        return(
                            <HomeItem
                                tag = {item.tag}
                                title = {item.title}
                                content = {item.content}
                                location = {item.location}
                                worksAt = {item.worksAt}
                                postedBy = {item.postedBy}
                                likes = {item.likes}
                                comments = {item.comments}
                                seen = {item.seen}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Home

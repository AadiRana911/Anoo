import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import {Header, Divider, Image} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {colors} from '../../theme'
import {Fonts} from '../../utils/Fonts'
const More = () => {
    return (
        <View style = {{flex: 1}} >
           <Header
                backgroundColor = {colors.primary}
                leftComponent = {<Image source = {{uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}} style = {{height: 50, width: 50, borderRadius: 25}} />}
                centerComponent = {<Text style = {{color: 'white', fontFamily: Fonts.OSeB, fontSize: 22}}>Profile</Text>}
                rightComponent = {<AntDesign name = {'logout'} style = {{color: 'white', fontSize: 30}} />}
            />
            <View style = {{flex: 1}}>
                <View style = {{ height: 100, backgroundColor: 'white', paddingHorizontal: 20, marginBottom: 10}}>
                    <View style = {{paddingVertical: 15, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style = {{fontSize: 18, fontFamily: Fonts.OSB, color: colors.primary}}>ABCDEF</Text>
                        </View>
                        <TouchableWithoutFeedback>
                            <View style = {{flexDirection: 'row'}}>
                                <AntDesign
                                    name = {'edit'}
                                    style = {{color: colors.primary, fontSize: 22}}
                                />
                                <Text style = {{color: colors.primary, fontSize: 15, fontFamily: Fonts.OSR}}> Edit</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <Text style = {{color: colors.primary, fontSize: 18, fontFamily: Fonts.OSB}}>15 Points</Text>
                </View>
                <View style = {{height: 100, backgroundColor: 'white', paddingVertical: 10, justifyContent: 'center'}}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <Text style = {{fontFamily: Fonts.OSR}}>Customize Topics</Text>
                        <EvilIcons name = {'chevron-right'} style = {{color: 'gray', fontSize: 30}} />
                    </View>
                    <Divider style = {{marginVertical: 10}} />
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <Text style = {{fontFamily: Fonts.OSR}}>Bookmarks</Text>
                        <EvilIcons name = {'chevron-right'} style = {{color: 'gray', fontSize: 30}} />
                    </View>
                </View>
                <View style = {{height: 140, backgroundColor: 'white', paddingVertical: 10, marginTop: 10, justifyContent: 'center'}}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <Text style = {{fontFamily: Fonts.OSR}}>Settings</Text>
                        <EvilIcons name = {'chevron-right'} style = {{color: 'gray', fontSize: 30}} />
                    </View>
                    <Divider style = {{marginVertical: 10}} />
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <Text style = {{fontFamily: Fonts.OSR}}>Updates</Text>
                        <EvilIcons name = {'chevron-right'} style = {{color: 'gray', fontSize: 30}} />
                    </View>
                    <Divider style = {{marginVertical: 10}} />
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <Text style = {{fontFamily: Fonts.OSR}}>Send feedback</Text>
                        <EvilIcons name = {'chevron-right'} style = {{color: 'gray', fontSize: 30}} />
                    </View>
                </View>
                <View style = {{height: 100, backgroundColor: 'white', paddingVertical: 10, marginTop: 10, justifyContent: 'center'}}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <Text style = {{fontFamily: Fonts.OSR}}>Suicide Prevention</Text>
                        <EvilIcons name = {'chevron-right'} style = {{color: 'gray', fontSize: 30}} />
                    </View>
                    <Divider style = {{marginVertical: 10}} />
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
                        <Text style = {{fontFamily: Fonts.OSR}}>Report Someone</Text>
                        <EvilIcons name = {'chevron-right'} style = {{color: 'gray', fontSize: 30}} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default More

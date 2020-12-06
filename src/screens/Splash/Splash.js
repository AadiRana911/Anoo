import React, {useEffect} from 'react'
import { View, Text, Dimensions, Image } from 'react-native'

const Splash = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    useEffect(() => {
          const timer = setTimeout(
        //   async
        () => {
            // const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
            // const email = await AsyncStorage.getItem('email')
            // if(isLoggedIn === 'true'){
            //   if(email === 'asadimtiaz711@gmail.com'){
                navigation.navigate('SignUp')
            //   }else{
            //     navigation.navigate('Tabs');
            //   }
            // } else{
            //     navigation.navigate('Login');
            // }
          },
          2000,
        );
        return () => clearTimeout(timer);
      }, [navigation]);
    return (
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source = {require('../../assets/logo.png')} style = {{height: height/2, width: height/2}} />
        </View>
    )
}

export default Splash;

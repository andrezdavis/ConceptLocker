import React from 'react';
import {Text,View,ImageBackground, StyleSheet} from 'react-native';

export default class Tutorial extends React.Component{

    render(){ 
        const {navigate} = this.props.navigation
        let {buttonText,title,text1,text2} = styles;

        return(
            <ImageBackground source={require('../images/bg4.png')} 
                style={{width: '100%', height: '100%'}}>
            <Text
                 style={title}>Tutorial</Text>
            <Text style={text1}>This app is purposed to users that want to seek more understanding on comprehension based topics. This is still in beta and we are hoping to deliver functionality geared toward mathematics. </Text>
            <Text style={text1}>1. Upload a pdf or txt file. Then press 'Next'. </Text>
            <Text style={text1}>2. Type in a phrase, at minimum, or a sentence. Must be at least 2 words.</Text>
            <Text style={text1}>3. Click 'Start Detail Search' button.</Text>

            <Text onPress={()=>navigate('Login')}
                style={buttonText}>Let's Start!</Text>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({ 
    title: {
        fontSize:42,
        color:"#2F2F2F",
        //fontFamily:"SemiBold",
        alignSelf:"center",
        marginTop:100,
    },
    buttonText: {
        alignSelf:"center",
        color:"#696969",
        fontSize:28,
        paddingVertical:20,
        marginTop: 80
    },
    text1: {
        color: "#2C2C2C",
        alignSelf:"center",
        fontSize: 17,
        marginTop: 30,
        paddingHorizontal: 20
    }

});
import React from 'react';
import {Text,View,ImageBackground, TextInput,StyleSheet, TouchableOpacity,TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Register extends React.Component{

    render(){
        
        const {navigate} = this.props.navigation
        let {title,button,buttonText,textFieldemail,textFieldepw} = styles;

        return(

            <ImageBackground source={require('../images/bg.png')} 
                style={{width: '100%', height: '100%'}}>
                <Text
                 style={title}
                >Sign Up</Text>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={textFieldemail}>
                    <Icon name="ios-mail" color="#969696" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#696969"
                        style={{paddingHorizontal:10}}
                    />
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={textFieldepw}>
                    <Icon name="ios-lock" color="#969696" size={24}/>
                    <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#696969"
                        style={{paddingHorizontal:10}}
                    />
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={textFieldepw}>
                    <Icon name="ios-lock" color="#969696" size={24}/>
                    <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#696969"
                        style={{paddingHorizontal:10}}
                    />
                </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity onPress={()=>navigate('Login')}>
                <View style={button}>
                    <Text 
                    style={buttonText}>Register</Text>
                </View>
                </TouchableOpacity>
                <Text onPress={()=>navigate('Login')}
                style={{
                    alignSelf:"center",
                    color:"#000000",
                    paddingVertical:20
                }}>I already have an account!</Text>
                
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
        marginTop:150,
    },
    
    textFieldemail: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:50,
        paddingHorizontal:10,
        borderColor:"#696969",
        borderRadius:23,
        paddingVertical:10
        },

    textFieldepw: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:55,
        borderWidth:2,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#696969",
        borderRadius:23,
        paddingVertical:10
    },

    button: {
        marginHorizontal:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        backgroundColor:"#2F2F2F",
        paddingVertical:12,
        borderRadius:23
    },
    buttonText: {
        fontSize:18,
        color:"white",
        //fontFamily:"SemiBold"
    }

});
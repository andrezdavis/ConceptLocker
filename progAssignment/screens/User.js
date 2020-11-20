import React from 'react';
import {Text,TouchableOpacity,ScrollView,View,ImageBackground, StyleSheet,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class User extends React.Component{ 
    render(){ 
        const {navigate} = this.props.navigation
        let {container,usernameText,profileInfos,image,nameSection,menuButton,menuButton2,buttonText,logoutButton,buttonText2} = styles;

        return(
            //<SafeAreaView style={container}>
            <ImageBackground source={require('../images/bg2.png')} 
                            style={{width: '100%', height: '100%'}}>
                <ScrollView showVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 29}}>
                    <Image source={require('../images/gatechNavy.png')} style={{ width:"100%", height:150}}/>
                {/* <Text style={title}>Profile</Text> */}
                    <View style={profileInfos}>
                        <Image source={require('../images/buzz.jpg')} style={image} />
                        <View style={nameSection}>
                            <Text username style={usernameText}>Buzz</Text>
                            <Text body style={{fontSize: 16}}>buzz@gatech.edu</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>navigate('History')}>
                    <View style={menuButton} >
                        <Text style={buttonText}>Search History</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={menuButton2}>
                        <Text style={buttonText}>Edit Profile</Text>
                    </View>
                    <View style={menuButton2}>
                        <Text style={buttonText}>Setting</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigate('Login')}>
                    <View style={logoutButton}>
                        <Text style={buttonText2}>Logout</Text>
                    </View>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
            //</SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex:1,
    },
    profileInfos: {
        marginTop: 100,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
    },
    image: {
        width:100,
        height:100,
        borderRadius:60,
        borderColor:'#dddddd',
        borderWidth:1,
        backgroundColor: '#dcdcdc',
    },
    nameSection: {
        textAlign: "center",
        alignSelf:"center",
    },
    usernameText: {
        marginTop: 10,
        fontSize:28,
        color:"#2F2F2F",
        textAlign: "center",
        alignSelf:"center",
        fontWeight:"bold",
    },
    menuButton: {
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"#FFF",
        width:"90%",
        padding:20,
        paddingBottom:22,
        borderRadius:10,
        shadowOpacity:80,
        elevation:15,
        marginTop:150
    },
    menuButton2: {
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"#FFF",
        width:"90%",
        padding:20,
        paddingBottom:22,
        borderRadius:10,
        shadowOpacity:80,
        elevation:15,
        marginTop:10
    },
    logoutButton: {
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"black",
        width:"90%",
        padding:20,
        paddingBottom:22,
        borderRadius:10,
        shadowOpacity:80,
        elevation:15,
        marginTop:10
    },
    buttonText: {
        fontSize:15,
        color:"#818181",
        fontWeight:"bold", 
    },
    buttonText2: {
        fontSize:15,
        color:"#FFF",
        fontWeight:"bold", 
    },
});
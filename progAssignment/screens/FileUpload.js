
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as DocumentPicker from 'expo-document-picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
// import Spinner from 'react-native-loading-spinner-overlay'
import {Text,View,ImageBackground,Image,StyleSheet,TouchableOpacity,FlatList,Button,ActivityIndicator,loading} from 'react-native';

export default function FileUpload({route, navigation}) {

    const [multipleFile, setMF] = useState([])
    const [isLoading, setLoading] = useState(false); //loading spinner 
    
    // loading spinner 
    if(isLoading) {
        return(
            <View style={styles.loading}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    const addEntry = (data) => {
        console.log('addEntry Start');
        
       let newObj = {
            "id": randId(),
            "name" : data.filename,
            "text" : data.text,
        }
        console.log('Finish load');
        setMF([...multipleFile, newObj]);
        console.log(multipleFile)
    };
    const randId = () => {
        let id = ''
        for (var i = 0; i < 10; i++) {
            id += String.fromCharCode(Math.trunc(Math.random()*85) + 48)
        }
        return id
    }
    const sendFile = () => {
        console.log('send File start');
        setLoading(true); //loading spinner true

        axios(
            
            {
            method: 'post',
            url: 'https://stormy-lake-40009.herokuapp.com/',
            data: {
                "uri": "https://www.otago.ac.nz/classics/otago055219.pdf"
            }

        }).then((res) =>{
            console.log('send File then start');
            setLoading(false) //loading spinner false
            addEntry(res.data)
           
        } 
        ).catch((err) => setLoading(false)); 
    }

    const renderItem = ({ item }) => (
        <Text>{item.name}</Text>
    );

    
                
return (
    <ImageBackground source={require('../images/bg2.png')} 
      style={{width: '100%', height: '100%'}}>
        <View>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {
            DocumentPicker.getDocumentAsync().then((res) => {
                console.log(res)
                
                if (res.type == 'success') { 
                    console.log('load start');  
                    sendFile()
                } else {
                    console.log('you cancelled')
                }
            })
            
        }}>
            <Image source ={require('../images/cloud.png')} style={styles.image} />    
                <View style={styles.viewTextStyle}>
                    <Text style={styles.textStyle}>{'Upload Files'} </Text>
                    <Text style={{fontSize:60, color:'white'}}> + </Text>                        
                    <Text style={styles.textStyle1}>{'Browse and select your file \n you want to upload'}</Text>
                </View>
            </TouchableOpacity>
        </View>
        

        <View style={styles.listHeader}>
            <Text style={{textAlign: 'center', fontSize: 18}}> File List </Text>
        </View>
        <FlatList
            style={styles.scrollContainer}
            data={multipleFile}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}>
        </FlatList>
          
    <TouchableOpacity onPress={() => {
        // console.log(multipleFile[0].name)
        navigation.navigate('Details Search', 
            multipleFile[0]
          )}}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
        </View>
    </TouchableOpacity>
    
      
  </ImageBackground> 
);
}


const styles = StyleSheet.create({
  container: {
      marginTop: 90,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  image: {
      width: 380,
      height: 240,
      marginTop: 90
  },
  viewTextStyle: {
      flex:1,
      position: 'absolute',
      textAlign: 'center', 
      alignSelf:"center",
      alignItems: 'center',
      marginTop: 90
      // justifyContent: 'center',
      // alignItems: 'center'
  },
  textStyle: {
      fontSize: 30,
      color:"white",
      marginTop:60,
      //fontFamily:"SemiBold",
      textAlign: 'center', 
      alignSelf:"center",
      alignItems: 'center'
  },
  textStyle1: {
      fontSize: 12,
      color:"#FFFFFF",
      marginTop:10,
      alignSelf:"center",
      textAlign:"center",
  },
  uploadStyle: {
      color:"#FFFFFF",
      alignSelf:"center",
  },
  listHeader: {
      backgroundColor:"#C3C2C2",
      alignItems: "center",
      justifyContent: "center",
      marginTop:20,
      height: 30,
      borderBottomWidth: 1,
      borderBottomColor: "#5C5C5C",
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 30,
      backgroundColor: "#FFF",
  },
  flatText: {
      marginVertical: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems:'center',
  },
  button: {
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:30,
      backgroundColor:"#2F2F2F",
      paddingVertical:12,
      borderRadius:23
  },
  buttonText: {
      fontSize:18,
      color:"white",
      //fontFamily:"SemiBold"
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    backgroundColor: 'transparent',
  }
  
});

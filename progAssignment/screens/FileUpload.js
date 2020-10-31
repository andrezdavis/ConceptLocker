
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as DocumentPicker from 'expo-document-picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
import {Text,View,ImageBackground,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default function FileUpload({navigation}) {
    


    let multipleFile = []
    const sendFile = () => {
        axios({
            method: 'post',
            url: 'https://stormy-lake-40009.herokuapp.com/',
            data: {
                "uri": "https://global.oup.com/us/companion.websites/9780199812998/studentresources/pdf/perry_glossary.pdf"
            }
        }).then((res) =>{
            console.log(res)
            multipleFile.push(res)
        } 
        ).catch((err) => console.log(err));
    }

                
return (

   <ImageBackground source={require('../images/bg2.png')} 
      style={{width: '100%', height: '100%'}}>
          
          <View>
              
              <TouchableOpacity onPress={() => {
                // FileSystem.downloadAsync(
                //     'https://www.troup.k12.ga.us/userfiles/929/My%20Files/HS%20Math/advanced_algebra/Unit%202%20and%203%20Polynomials/PascalsTriangle.pdf?id=14074',
                //     FileSystem.documentDirectory + 'pascaltriangle.pdf'
                //   )
                //     .then(({ uri }) => {
                //       console.log('Finished downloading to ', uri);
                //     })
                //     .catch(error => {
                //       console.error(error);
                //     });
                DocumentPicker.getDocumentAsync().then((res) => {
                    console.log(res)
                    if (res.type == 'success') {
                    sendFile()
                    } else {
                        console.log('you cancelled')
                    }
                })

                
            }} 
                  style={{alignItems: 'center'}}>
                  <Image source ={require('../images/cloud.png')}
                          style={styles.image}        
                  />

                  <View style={styles.viewTextStyle}>
                      <Text style={styles.textStyle}>{'Upload Files'} </Text>
                      <Text style={{fontSize:60, color:'white'}}> + </Text>                        
                      <Text style={styles.textStyle1}>{'browse and select your file \n you want to upload'}</Text>
                  </View>
              </TouchableOpacity>
      </View>
      <View style={styles.listHeader}>
          <Text style={{textAlign: 'center', fontSize: 18}}> File List </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
          {multipleFile.forEach((item) => (
              <View>
                  <Text style={styles.flatText}>
                      {item.name ? item.name : ''} 
                  

                      <Text style={styles.deleteText} onPress={()=>{this.deleteFiles(key)}}> delete </Text>
                  </Text>
              </View>
          ))}
      </ScrollView>
    <TouchableOpacity onPress={() => { navigation.navigate('Details Search')}}>
    <View style={styles.button}>
          <Text 
          style={styles.buttonText}>Next</Text>
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
      marginBottom: 100,
      backgroundColor: "#FFF",
  },
  flatText: {
      marginVertical: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems:'center',
  },
  deleteText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'red',
  },
  button: {
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:60,
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

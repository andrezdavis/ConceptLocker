
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as DocumentPicker from 'expo-document-picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
import {Text,View,ImageBackground,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';

export default function FileUpload() {
  let multipleFile = []
  let showFileSystem = false
function readTextFile(filePath)
{
    
}
function deleteFile(filePath) {
    FileSystem.deleteAsync(filePath).then((res) => console.log(res)).catch((err) => console.log(err))
}
let htmlRead = `
                <!DOCTYPE html>
                <html>
                <script>
                    function requestConvert() {
                            alert(document.getElementById('clickforfile').files[0].name)
                            axios({
                                method: 'post',
                                url: 'https://stormy-lake-40009.herokuapp.com/',
                                data: {
                                    "stuff": document.getElementById('clickforfile').files[0].name
                                  }
                              });
                    }
                    jQuery(function(){
                        jQuery('#clickforfile').click();
                     });
                </script>
                <body>
                <input id="clickforfile" type="file" name="filetoupload">
                <button onclick="requestConvert()">Submit File</button>    
                <p id="p1">Hello everyone</p>
                
                </body>
                </html>
                `
                
return (

    
   <ImageBackground source={require('../images/bg2.png')} 
      style={{width: '100%', height: '100%'}}>
          
            <WebView source={{ html: htmlRead }} style={styles.container} />
          <View>
              
              <TouchableOpacity onPress={async() => {
                FileSystem.downloadAsync(
                    'https://www.troup.k12.ga.us/userfiles/929/My%20Files/HS%20Math/advanced_algebra/Unit%202%20and%203%20Polynomials/PascalsTriangle.pdf?id=14074',
                    FileSystem.documentDirectory + 'pascaltriangle.pdf'
                  )
                    .then(({ uri }) => {
                      console.log('Finished downloading to ', uri);
                    })
                    .catch(error => {
                      console.error(error);
                    });
                // DocumentPicker.getDocumentAsync().then((res) => {
                // multipleFile.push(res)
                // readFile(res["uri"])
               
                // FileSystem.moveAsync("progAssignment/readfilepls.txt", FileSystem.documentDirectory + "readfilepls.txt").then((res) => {console.log(res)})
                
                // })
                readTextFile('file://C:/Users/AndreGamingPC/DevelopmentFolder/ProgrammingAssignment/progAssignment/readfilepls.txt')

                let dir = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
                console.log(FileSystem.documentDirectory)
                  }} style={{alignItems: 'center'}}>
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

      <View style={styles.button}>
          <Text onPress={() => { navigation.navigate('DetailResult')}}
          style={styles.buttonText}>Start Detail Search</Text>
      </View>
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

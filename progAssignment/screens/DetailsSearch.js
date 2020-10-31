import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  // FlatList,
} from "react-native";
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ThemeContext from "../contexts/ThemeContext";



export default function DetailsSearch({route, navigation}) {
  let {flatText, textBox, textInput, scrollContainer,button,buttonText} = styles;
  const [query, setQuery] = useState("");
  let detailedSentences = []
  let sentences = []
  let similarityTrack = []
  // const [data, setData] = useState([]);
  useEffect(() => {
    
    getSentences(route.params.text.toString())
  }, []);
  let {id, name, text} = route.params
  const getSentences = (text) => {
    text = text.replace(/(\r\n|\n|\r)/gm," ");
    text = text.replace(/\s+/g," ");
    text = text.replace(/(\\|-)/gm,"");
    text = text.replace(/\\/g, '');
    text = text.replace(/(“|”|’)/g, "")
    let i = 0
    let data = []
    for (i = 0; i < text.length;) {
      console.log('big money')
      if (i + 40000 < text.length) {
      data.push(text.substring(i, text.substring(i, i + 40000).lastIndexOf(".")))
      i+=text.substring(i, i + 40000).lastIndexOf(".")
      console.log(i)
      } else {
        data.push(text.substring(i))
        i = text.length
        console.log(i)
      }
    }
    data.forEach((element) => {
      axios
      .post("https://api.monkeylearn.com/v3/extractors/ex_Y8EEfTKJ/extract/", {
        "data": [element]
          }, {
        headers: {
            Authorization:"Token df54194010c9c38f93075ca244fe4ff57b165c23",
            "Content-Type": "application/json"
        }
      }
      )
      .then(function (response) {
        // console.log(response.data);
        // console.log(response.data[0]['extractions']);
        
        response.data[0]['extractions'].forEach(
            (item) => {
              if (item) {
            sentences.push(item['parsed_value'])
              }
        })
      })
      .catch(function (error) {
        console.log("Not working", error);
      });
    })
    
  };
;
  
  const getSimilarity = (sentence, phrase) => {
    axios({
        method: 'post',
        url: 'https://apis.paralleldots.com/v4/similarity',
        data: "text_1=" + sentence + "&text_2=" + phrase + "&api_key=2IlEShMFGvqsg1zFZfHpxw3v1cHuTUPt9szX0GGrvyo",
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function(response) {
        similarityTrack = []
        if (response.data['similarity_score'] >= .4) {
            detailedSentences.push(sentence)
        }
        similarityTrack.push([response.data['similarity_score'], sentence])
      }).catch(function (error) {
        console.log("Not working", error);
      });
  } 
  const getDetailedSentences = () => {
      detailedSentences = []
      // sentences.forEach((sentence) => {
        for (let i = 0; i < 10; i++) {
          getSimilarity(sentences[i], query)
        }
      // })
      
  }
  const checkdSSize = () => {
    if (detailedSentences.length == 0) {
      similarityTrack.sort(function(a, b){return b[0]-a[0]})
      if (similarityTrack.length == 0 || similarityTrack[0] === undefined ) {
        console.log("There are no matches")
        getDetailedSentences()
        return
      }
      if(similarityTrack[0][0] === undefined || similarityTrack[0][0] < .1) {
        console.log("There are no matches")
        return
      }
      detailedSentences.push(similarityTrack[0])
      console.log(detailedSentences)
    }
  }
  
  return (
    <ImageBackground source={require('../images/bg2.png')} 
                style={{width: '100%', height: '100%'}}>
                <View>
                    <Text style={{fontSize:40,
                     color:"#2F2F2F",
                     alignSelf:"center",
                     marginTop:50}}>Details</Text>
                </View>
                <View style={styles.textBox}>
                    <TextInput style={styles.textInput}
                    placeholder='Search Details..'
                    onChangeText={value => setQuery(value)}
                      value={query}
                    //underlineColorAndroid='transparent'
                    >    
                    </TextInput>
                </View>
               
                <TouchableOpacity onPress={() => {
          getDetailedSentences();
          checkdSSize();
          // console.log(similarityTrack)
          // console.log(detailedSentences)
      }}>
        <View style={styles.button}>
          <Text 
          style={styles.buttonText}>Search</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('File Upload')}>
    <View style={styles.button}>
          <Text 
          style={styles.buttonText}>Upload Another File</Text>
      </View>
    </TouchableOpacity>
                <View> 
                    <ScrollView style={scrollContainer}>
                        <Text style={flatText}>test</Text>
                        
                       

                    </ScrollView>
                </View>
                
                

            </ImageBackground>
      

      
      
      
  );
}

const styles = StyleSheet.create ({
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
    height: "30%",
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
},
  textBox: {
      flexDirection:"row",
      alignItems:"center",
      marginHorizontal:20,
      borderWidth:1,
      marginTop:15,
      paddingHorizontal:10,
      borderColor:"#969696",
      backgroundColor:"#FFF",
      borderRadius:23,
      paddingVertical:10,
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#000000',
      backgroundColor: '#FFF',
  },
  listContainer: {
      flexDirection: 'row',
      padding: 5,
  },
  dataContainer:{
      padding: 10,
      paddingTop: 5,
  },
  scrollContainer: {
      marginTop: 20,
      backgroundColor: "#FFF",
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      height: 550
  },
  flatText: {
      marginVertical: 5,
      marginLeft: 10,
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
  
}
)

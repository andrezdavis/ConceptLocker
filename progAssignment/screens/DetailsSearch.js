import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  // FlatList,
} from "react-native";

export default function DetailsSearch() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  let detailedSentences = []
  let sentences = []
  let similarityTrack = []
  // const [data, setData] = useState([]);

  const getSentences = () => {
    axios
      .post("https://api.monkeylearn.com/v3/extractors/ex_Y8EEfTKJ/extract/", {
        "data": ["Google is an American multinational technology company that specializes in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware. Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University, in California."]
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
        sentences = []
        response.data[0]['extractions'].forEach(
            (item) => {
            sentences.push(item['parsed_value'])
        })
      })
      .catch(function (error) {
        console.log("Not working", error);
      });
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
      sentences.forEach((sentence) => {
          getSimilarity(sentence, value1)
      })
      
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
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => setValue1(text)}
        value={value1}
      />
      <TextInput
        style={styles.inputBox}
        onChangeText={(text) => setValue2(text)}
        value={value2}
      />
      <TouchableOpacity onPress={() => {
          getSentences();
          getDetailedSentences();
          checkdSSize();
          // console.log(similarityTrack)
          // console.log(detailedSentences)
      }}>
        <Text> Details Search! </Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: { height: 40, borderColor: "gray", borderWidth: 1, width: "100%", marginBottom: 25 },
});

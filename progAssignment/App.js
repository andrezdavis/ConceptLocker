import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsSearch from "./screens/DetailsSearch"
import DetailsResults from "./screens/DetailsResults"

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  // FlatList,
} from "react-native";

const Tab = createBottomTabNavigator();



export default function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  // const [data, setData] = useState([]);

  const submitFirestore = () => {
    axios
      .post("http://localhost:9000/setup/", {
        field1: value1,
        field2: value2,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("Not working", error);
      });
  };

  //Displays the data in server console
  const getFirestore = () => {
    axios
      .get("http://localhost:9000/data")
      .then(function (response) {
        console.log(response.data);
      })
      // .then(({ data }) => {
      //   setData(data)
      // })
      .catch(function (error) {
        console.log("Not working", error);
      });
  };

  // const getTextSummarization = () => {
  //   axios
  //     .post("https://api.deepai.org/api/summarization", {
  //       text: "Summarize this text. I am writing text in here and I want it summarized. Please don't make this look terrible please."
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("Not working", error);
  //     });
  // }
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Details Search" component={DetailsSearch} />
        <Tab.Screen name="Details Results" component={DetailsResults} />
      </Tab.Navigator>
      {/* <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text>{item.field1}, {item.field2}</Text>
          )}
        /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: { height: 40, borderColor: "gray", borderWidth: 1, minWidth: 30 },
});

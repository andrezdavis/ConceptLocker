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
      <TouchableOpacity onPress={submitFirestore}>
        <Text> Submit to firestore! </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getFirestore}>
        <Text> View data from firestore! </Text>
      </TouchableOpacity>
      {/* <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text>{item.field1}, {item.field2}</Text>
          )}
        /> */}
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
  inputBox: { height: 40, borderColor: "gray", borderWidth: 1, minWidth: 30 },
});

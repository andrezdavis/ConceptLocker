import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';


import DetailsSearch from "./screens/DetailsSearch"
import FileUpload from "./screens/FileUpload"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Tutorial from "./screens/Tutorial"
import User from "./screens/User"
import History from "./screens/History"

import {
  StyleSheet,
  View,
} from "react-native";

import ThemeContextProvider from "./contexts/ThemeContext";
import { Tab } from "react-bootstrap";


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();


const FileUploadStack = ({route, navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
  }}>
  <Stack.Screen name="File Upload" component={FileUpload} initialParams={{ itemId: 42 }} options={{
                title:'Concept Locker'}} />
  </Stack.Navigator>
);

const DetailsSearchStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
  }}>
  <Stack.Screen name="Details Search" component={DetailsSearch}  options={{
                title:'Concept Locker'}} />
  </Stack.Navigator>
);

const LoginStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
  <Stack.Screen name="Login" component={Login} options={{
                title:'Concept Locker'}} />
  </Stack.Navigator>
);

const TutorialStack = ({navigation}) => (
  <ThemeContextProvider>
    <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
    <Stack.Screen name="Tutorial" component={Tutorial} options={{
                  title:'Concept Locker' }} />
    </Stack.Navigator>
  </ThemeContextProvider>
);

const RegisterStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
  <Stack.Screen name="Register" component={Register} options={{
                title:'Concept Locker' }} />
  </Stack.Navigator>
);
const HistoryStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
  <Stack.Screen name="History" component={History} options={{
                title:'Concept Locker' }} />
  </Stack.Navigator>
);




export default function App() {
  
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  // const [data, setData] = useState([]);

  return (
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="Login" activeColor="#0071ff" barStyle={{paddingBottom:15}}>
          <Tabs.Screen name= "Login" component={Login} options={{ tabBarVisible: false, tabBarButton: () => null}}/>
          <Tabs.Screen name= "Register" component={Register} options={{ tabBarVisible: false,tabBarButton: () => null }}/>
          <Tabs.Screen name = "Tutorial" component={Tutorial} option={{ tabBarLabel: 'Tutorial', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-book"} color={color} size={20}/>)}}/>
          <Tabs.Screen name= "File Upload" component={FileUpload} option={{ tabBarLabel: 'File Upload', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-home"} color={color} size={20}/>)}}/>
          <Tabs.Screen name= "Details Search" component={DetailsSearch} option={{ tabBarLabel: 'Details Search', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-search"} color={color} size={20}/>)}}/>
          <Tabs.Screen name = "Profile" component={User} option={{ tabBarLabel: 'Profile', showIcon: true,
                                                        tabBarIcon: ({ color,size }) => ( 
                                                        <Icon name={"ios-person"} colosr={color} size={20}/>)}}/>
          <Tabs.Screen name= "History" component={History} options={{ tabBarButton: () => null}}/>

        </Tabs.Navigator>

      {/* <Stack.Navigator initialRouteName="Tutorial">
        <Stack.Screen name="Tutorial" component={Tutorial} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="File Upload" component={FileUpload} />
        <Stack.Screen name="Details Search" component={DetailsSearch}/>
      </Stack.Navigator> */}
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

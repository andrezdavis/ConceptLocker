import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsSearch from "./screens/DetailsSearch"
import FileUpload from "./screens/FileUpload"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Tutorial from "./screens/Tutorial"
import Icon from 'react-native-vector-icons/Ionicons';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  // FlatList,
} from "react-native";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FileUploadStack = ({navigation}) => (
  <Stack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <Stack.Screen name="File Upload" component={FileUpload} options={{
          title:'Concept Locker'
          }} />
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
            <Stack.Screen name="Details Search" component={DetailsSearch} options={{
            title:'Concept Locker'
            }} />
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
                title:'Concept Locker'
                }} />
        </Stack.Navigator>
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
                  title:'Concept Locker'
                  }} />
          </Stack.Navigator>
          );
          const TutorialStack = ({navigation}) => (
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
                    title:'Concept Locker'
                    }} />
            </Stack.Navigator>
            );
export default function App() {
  
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  // const [data, setData] = useState([]);

 
  
  return (
      <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Details Search" component={DetailsSearch} />
        <Tab.Screen name="File Upload" component={FileUploadStack} />
      </Tab.Navigator> */}
      <Stack.Navigator initialRouteName="Tutorial">
        <Stack.Screen name="Tutorial" component={TutorialStack}/>
        <Stack.Screen name="Login" component={LoginStack}/>
        <Stack.Screen name="Register" component={RegisterStack}/>
        <Stack.Screen name="File Upload" component={FileUploadStack}/>
        <Stack.Screen name="Details Search" component={DetailsSearchStack}/>
      </Stack.Navigator>
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

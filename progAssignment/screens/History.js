import React, {Component, useState} from 'react';
import {Text,TouchableOpacity,FlatList,View,ImageBackground, StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB, List} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function History({route, navigation}) {
    const [details, setDetails] = useState([]);
    const addDetails = detail => {
        detail.id = details.length + 1
        setDetails([...details, detail])
    }

    const {query,detailedSentences} = this.props.route.params

    return (

        <View style={styles.container}>
            <ImageBackground source={require('../images/bg2.png')} 
                                 style={{width: '100%', height: '100%'}}>
                <View>
                    <Text style={{fontSize:40, color:"#2F2F2F", alignSelf:"center", 
                                    marginTop:50}}>Search History</Text>
                </View> 
                {details.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>You do not have any search history</Text>
                    </View>
                ) : (
                    <FlatList
                        data={details}
                        renderItem={({ item }) => (
                            <List.item 
                                title={item.query}
                                description={item.detailedSentences}
                                descriptionNumberOfLines={3}
                                titleStyle={styles.listTitle}
                            />
                            
                        )}
                        keyExtractor={item=> item.id.toString()}
                    />
                )}
                <TouchableOpacity onPress={()=>navigation.navigate('Details Search')}>
                    <View style={styles.backbutton}>
                        <Icon name="ios-undo" color="#FFF" size={20}/>
                        <Text style={styles.buttonText}> Back</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>

    )
}

// export default class History extends React.Component{ 
//     constructor(props) {
//         super(props);
//         this,state={
//             notes:[],
//             note:''
//         }
//     }
//     render(){ 

//         // const [notes, setNotes] = useState([]);
//         // const addNotes = note => {
//         //     note.id = notes.length + 1
//         //     setNotes([...notes, note])
//         // }
//         const {navigate} = this.props.navigation
        
//         const {query,detailedSentences} = this.props.route.params
//         let {container} = styles;
        



//         return(
//             <View style={container}>
//                 <ImageBackground source={require('../images/bg2.png')} 
//                                 style={{width: '100%', height: '100%'}}>
//                     <View>
//                         <Text style={{fontSize:40,
//                             color:"#2F2F2F",
//                             alignSelf:"center",
//                             marginTop:50}}>Search History</Text>
//                     </View> 

//                     <View> 
//                         <ScrollView style={styles.scrollContainer}>
//                             <Text style={styles.flatTitleText}>Title: {query}</Text>
//                             <Text style={styles.flatText}>Detail: {detailedSentences}</Text>
//                         </ScrollView>
//                     </View>

//                         {/* <ScrollView style={styles.scrollContainer}>

//                             <FlatList data={query}
//                             renderItem={({ item }) => (
//                                 <List.Item
//                                     title={item.query}
//                                     description={item.detailedSentences}
//                                     descriptionNumberOfLines={1}
//                                     titleStyle={styles.listTitle}
//                                 />
//                             )}
//                             />
                            
//                         </ScrollView> */}
                    
                    
//                     <TouchableOpacity onPress={()=>navigate('Details Search')}>
//                         <View style={styles.backbutton}>
//                             <Icon name="ios-undo" color="#FFF" size={20}/>
//                             <Text style={styles.buttonText}> Back</Text>
//                         </View>
//                     </TouchableOpacity>

//                 </ImageBackground>
//             </View>
//         ) 
//     }
// }

const styles = StyleSheet.create({ 
    container: {

    },
    scrollContainer: {
        marginTop: 20,
        backgroundColor: "#FFF",
        marginLeft: 10,
        marginRight: 10,
        bottom: 5,
        height: 400
       
    },
    flatTitleText: {
        marginVertical: 5,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    flatText: {
        marginVertical: 5,
        marginLeft: 10,
    },
    listTitle: {
        fontSize: 20
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    titleText: {
        fontSize: 20
    },
    backbutton: {
        flexDirection:"row",
        marginHorizontal:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 30,
        borderWidth: 1,
        backgroundColor:"#2F2F2F",
        paddingVertical:7,
        borderRadius:23
      },
    buttonText: {
        fontSize:15,
        color:"#FFF",
    },
    
});
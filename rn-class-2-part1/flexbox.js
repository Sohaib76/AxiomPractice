import React from 'react';
import { ScrollView, FlatList, SectionList, ActivityIndicator, Picker, WebView, 
  Switch, KeyboardAvoidingView, TextInput, Slider,
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//import { For,mLabel, FormInput, FormValidationMessage, 
  // ThemeProvider , Card, Icon, ListItem, PricingCard, SearchBar, ScrollView} from 'react-native-elements'




//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class FlexBoxx extends React.Component {

 

  
  

  render() {

    

    
     
    return (




          
 <View style={{flex : 1}}>
        
        <View style={{flex : 2, flexDirection: "row",
          maxWidth : 100,
          maxHeight: 100
      }}>
            <View style={{backgroundColor: 'black', flex:1}}/>

        

            <View style={{backgroundColor: 'white', flex:1}}/>

        
        </View>

        {/* justifyContent    Work On Main Axis   */}

        <View style={{flex : 3, flexDirection: "row", justifyContent:"flex-start"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>


        </View>
        <View style={{flex : 3, flexDirection: "row", justifyContent:"center"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>


        </View>

        <View style={{flex : 3, flexDirection: "row", justifyContent:"flex-end"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>


        </View>

        <View style={{flex : 3, flexDirection: "row", justifyContent:"space-around"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>


        </View>

        <View style={{flex : 3, flexDirection: "row", justifyContent:"space-between"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>


        </View>


        {/* alignItems work on Cross axis    (stretch default value)*/}

        <View style={{flex : 3, flexDirection: "row", justifyContent:"space-around", alignItems:"center"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>
            <View style={{backgroundColor: 'red',  width: 20, height:50}}/>


        </View>

        <View style={{flex : 3, flexDirection: "column", justifyContent:"space-around", alignItems:"flex-start"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>
            <View style={{backgroundColor: 'red',  width: 20, height:50}}/>


        </View>

        <View style={{flex : 3, flexDirection: "column", justifyContent:"space-around", alignItems:"flex-end"}}>
            <View style={{backgroundColor: 'blue',  width: 20 , height:50}}/>



            <View style={{backgroundColor: 'black',  width: 20, height:50}}/>
            <View style={{backgroundColor: 'red',  width: 20, height:50}}/>


        </View>

        <View style={{flex : 3, flexDirection: "column", justifyContent:"space-around", alignItems:"stretch"}}>
            <View style={{backgroundColor: 'blue',  height:30}}/>



            <View style={{backgroundColor: 'black',  height: 30,}}/>
            <View style={{backgroundColor: 'red',  height: 30, }}/>


        </View>


    </View>


           
       

  





   
    )  
  }
}
const styles = {

  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
},
loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
},
logo: {
    position: 'absolute',
    width: 300,
    height: 100
}

}
export default FlexBoxx;
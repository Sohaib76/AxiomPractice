import React from 'react';
import { Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//import { FormLabel, FormInput, FormValidationMessage, 
  // ThemeProvider , Card, Icon, ListItem, PricingCard, SearchBar, ScrollView} from 'react-native-elements'
import { Ionicons,AntDesign } from '@expo/vector-icons';

//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


  class ReactClass extends React.Component {

    
  handleLongPress= ()=>{
    alert("Longed Pressed")
  }

  handlePress= ()=>{
    alert(" Pressed")
  }


  render() {
    
   
    return (

      <View style={styles.View}>
          
         

        <View style={styles.subView}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={styles.myImg} />
              <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={styles.myImg} />
        </View>
        <View style={styles.subView}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={styles.myImg} />
              <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
              style={styles.myImg} />
        </View>
      
        <View style={styles.View}>
          <Text style={[ styles.txtStyle]} onPress={this.onPressTitle}>These are React Icons {"\n"}</Text>
          <Text numberOfLines={2}> This is Second Line</Text>
          {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
          <AntDesign name="play" size={42}/>
          <Button title="Play"/>
          <TouchableHighlight onPress={this.handlePress} onLongPress={this.handleLongPress}>

            <Text>Touch It</Text>
          </TouchableHighlight>
          {/* <TouchableOpacity onPress={this.handlePress} onLongPress={this.handleLongPress}>

            <Text>Touch It</Text>
          </TouchableOpacity>

          <TouchableNativeFeedback onPress={this.handlePress} onLongPress={this.handleLongPress}>

            <Text>Touch It</Text>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback onPress={this.handlePress} onLongPress={this.handleLongPress}>

              <Text>Touch It</Text>
          </TouchableWithoutFeedback> */}

        


        </View>
        {/* <View style={{backgroundColor:"red", flex:4}} />
        <View style={{backgroundColor:"yellow", flex:2}} /> */}
         


       </View>


    );
  }
}


const styles = {

  containerStyle: {

      marginTop: 10,
      flex : 1

  },
  contentContainer: {
    paddingVertical: 20
  },
  View :{
    flex : 1,
    // flexDirection: 'row'
  }, 
  subView: {
    flex : 1,
    flexDirection: 'row'
  },
  myImg :{
    flex : 2
  }, 
  txtStyle: {
    fontSize : 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }

}

export default ReactClass;
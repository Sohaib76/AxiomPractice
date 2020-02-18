import React from 'react';
import { 
  Switch, KeyboardAvoidingView, TextInput, Slider,
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//import { FormLabel, FormInput, FormValidationMessage, 
  // ThemeProvider , Card, Icon, ListItem, PricingCard, SearchBar, ScrollView} from 'react-native-elements'
import { Ionicons,AntDesign } from '@expo/vector-icons';


//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


  class Switch extends React.Component {

  state = {
    imageSrc : "https://avatars.io/facebook/",
    imageSize : '/extralarge.jpg',
    accountName : 'aamirpinger',
    switch : false,
    num : 0
  }

  handleSlider = (value) =>{
    this.setState( 
      () =>({
        num : value
    })
    
    )
  }

  //false ko true aur true ko false
  handleSwitch = () =>{
    this.setState(

      (prevState) => ({
        switch : !prevState.switch
      })
    )
  }

  handleTextInputChange = (val) => {
    this.setState(
      () => ({
        accountName: val
      }))
  }

  render() {
      const img = this.state.imageSrc +  this.state.accountName+ this.state.imageSize;
   
    return (

     <KeyboardAvoidingView style={styles.View} behavior="padding">
{/* 
        <Image source={require("./assets/icon.png")}/> */}

        <Text style={styles.txtStyle}>This is a text This is a text This is a text This is a text This is a text
        This is a text This is a textThis is a text This is a textThis is a text This is a text
        This is a text This is a textThis is a text This is a text
        </Text>

        <Image 
          style = {{width: 100, height: 100}} 
          source={{uri : "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"}}/>
       
       <Image 
          style = {{width: 100, height: 100}} 
          source={{uri : img}}/>

        <Switch value={this.state.switch} onValueChange={this.handleSwitch}/>

        {
          //if condition
          (this.state.switch) && <TextInput value={this.state.accountName}

                onChangeText={this.handleTextInputChange}/>

                  
        }

       <Text>{JSON.stringify(this.state.switch)}</Text>
        <Text>Slider Value : {this.state.num}</Text>

       <Slider value={this.state.num} minimumValue={0} maximumValue={100}  step={10} 
          onValueChange = {(value) => this.handleSlider(value)}
       />

       </KeyboardAvoidingView>


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

export default Switch;
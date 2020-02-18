import React from 'react';
import {  ActivityIndicator, Picker, WebView, 
   Text, View , TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//import { For,mLabel, FormInput, FormValidationMessage, 
  // ThemeProvider , Card, Icon, ListItem, PricingCard, SearchBar, ScrollView} from 'react-native-elements'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';


//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class APW extends React.Component {

 

  

  render() {

   
     
    return (




     <View  >

        <ActivityIndicator size="large" color="red"/>
        <Text>asfas</Text>

        {/* DropDown */}
        <Picker selectedValue="1" onValueChange={this.updateUser} >
          <Picker.Item label="Imran" value="1"/>
          <Picker.Item label="Aka" value="2"/>
          <Picker.Item label="QWe" value="3"/>
         </Picker>

         <WebView source={{uri : "http://www.google.com/"}}/>


      







      </View>
    )  
  }
}
const styles = {


  txtStyle: {
    fontSize : 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }

}
export default APW;
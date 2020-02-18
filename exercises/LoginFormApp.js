import React from 'react';
import { ScrollView, FlatList, SectionList, ActivityIndicator, Picker, WebView, 
  Switch, KeyboardAvoidingView, TextInput, Slider,
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//import { For,mLabel, FormInput, FormValidationMessage, 
  // ThemeProvider , Card, Icon, ListItem, PricingCard, SearchBar, ScrollView} from 'react-native-elements'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import AsyncStorageComponent from './rn-class-2-part1/AsyncStorageComponent';
import AsyncStorage2 from './rn-class-2-part1/AsyncStorage-2';
import PermissionsExample from './rn-class-2-part1/PermissionExample';
import Counter from './exercises/counter';
import FighterGame from './exercises/fighterGame';
import LoginForm from './exercises/LoginForm';




//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class App extends React.Component {

 

  
  

  render() {

    console.log('debug')

    // debugger
     
    return (




     

        
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.loginContainer}>
              <Image resizeMode="contain" style={styles.logo} source={{uri : 'https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png'}} />
            
            </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
      </KeyboardAvoidingView>






   
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
export default App;
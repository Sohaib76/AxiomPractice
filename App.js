import React from 'react';
import { ScrollView, FlatList, SectionList, ActivityIndicator, Picker, WebView, 
  Switch, KeyboardAvoidingView, TextInput, Slider,
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
//import { For,mLabel, FormInput, FormValidationMessage, 
  // ThemeProvider , Card, Icon, ListItem, PricingCard, SearchBar, ScrollView} from 'react-native-elements'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import FlexBoxx from './rn-class-2-part1/flexbox';
import PlatformMode from './rn-class-2-part1/PlatformMode';
import StyleComponent from './rn-class-2-part1/StyleComponent';
import StatusBarEG from './rn-class-2-part1/StatusBarEG';
import TabNavigationC from './rn-class-2-part1/TabNavigationC';
import DummyStatusBar from './rn-class-2-part1/TabNavigationC';
import StackNavigatorEG from './rn-class-2-part2/StackNavigatorEG';
import DrawerNavigationEG from './rn-class-2-part2/DrawerNavigationEG';
import AnimationEG from './rn-class-2-part2/AnimationEG';
import Permisions from './rn-class-2-part2/Permisions';
import NotificationComponent from './rn-class-2-part2/NotificationComponent';
import Camera_ImageEditing from './rn-class-2-part2/Camera-ImageEditing';
import HandlingPhotoExample from './rn-class-2-part2/Camera-ImageEditing';




//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class App extends React.Component {

 

  
  

  render() {

    

    
     
    return (




     

        <View style={{flex:1, justifyContent: 'center'}}>
          <StatusBarEG/>
         <HandlingPhotoExample/>
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
txt1:{
  fontSize : 20,
  fontWeight: 'bold',

},
txt2:{
  fontSize : 20,
  fontWeight: 'bold',
  color: 'purple'

},
logo: {
    position: 'absolute',
    width: 300,
    height: 100
}

}
export default App;
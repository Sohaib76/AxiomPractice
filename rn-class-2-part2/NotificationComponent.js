//Local   >>>  From Application
//Remote  >>>   Server Side

//https://www.facebook.com/aamirpinger/videos/10216818456287983/?t=5472
import React from 'react';
import { ScrollView, FlatList, SectionList, ActivityIndicator, Picker, WebView, 
  Switch, KeyboardAvoidingView, TextInput, Slider, Keyboard, Platform,
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

import {Constants, Notifications, Permissions} from 'expo'


class NotificationComponent extends React.Component {

 onSubmit(e){
     Keyboard.dismiss()

     const localNotification ={
         title: "Local Notification",
         body: "You have received a local notification",
        ios:{sound: true },
        android:{channelId: 'localReminder', color: 'silver'}
     };


     const schedulingOptions = {
         time: (new Date().getTime() + Number(e.nativeEvent.text) * 1000),  //e.nativeEvent.text is userInput
         repeat: 'minute'  //hour day week month year
     }

     //Notifications Show Only When app is not active
     Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);

 }


 //nOT a Proper way.
 handleNotification(){
     console.warn("On screen notifi example")
 }

 componentDidMount(){
     if(Platform.OS === 'android'){
         Notifications.createChannelAndroidAsync('local-reminder' , {
             name: 'Local Reminder',
             sound: true,
             vibrate: true,
             priority: 'max'
         })
     }





     /**To Check If app has already have the permission
      * 
      * 
      * Permissions.getAsync(Permissions.SYSTEM_BRIGHTNESS)
      * .then(
      *   ({status}) => { console.log(Json.stringify(status) + "System Brightness Sttaus")}
      * )
      */


      //Notifications Permission

      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(
        ({status}) => {
          console.log(JSON.stringify(status) + "NOTIFICATIONS")
          if(Constants.isDevice && status==='granted'){
            console.log("Notification Permission Is Granted")
          }

          //Listener After granted permission
          Notifications.addListener(this.handleNotification);

        }
        
      ).catch(() => "NO PERMISSION GRAANTED")

      


      



 }

  
  

  render() {

    

    
     
    return (




     

        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <Text style={styles.txt1}>Enter TIme In Seconds and Press Enter</Text>
          <TextInput onSubmitEditing={this.onSubmit} placeholder='time in sec' style={{width: 160
            , borderWidth: 1, 
          }}/>
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
export default NotificationComponent;
import React from 'react';
import { ScrollView, FlatList, SectionList, ActivityIndicator, Picker, WebView, 
  Switch, KeyboardAvoidingView, TextInput, Slider,
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

import {FontAwesome} from '@expo/vector-icons'

import {Permissions} from 'expo'






function clicked(){
    //https://facebook.github.io/react-native/docs/next/permissionsandroid
    //https://docs.expo.io/versions/latest/sdk/permissions/
    Permissions.askAsync(Permissions.NOTIFICATIONS)
    .then( ({status}) => {
        alert(status)
        if (status !== 'granted'){
            alert("ASfafksafl")
        }
    }
        
            
    
    )
}









class Permisions extends React.Component {

 

  
  

  render() {

    

    
     
    return (




     

        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <Text style={styles.txt1}> This Is Permission App</Text>
            <FontAwesome name="bell" size={40} onPress={()=> clicked()}/>
          <Text style={styles.txt2}> Click On A bell Icon To get Notifications</Text>
        </View>
         
       
     

      
    






   
    )  
  }
}
const styles = {

  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
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

}
export default Permisions;
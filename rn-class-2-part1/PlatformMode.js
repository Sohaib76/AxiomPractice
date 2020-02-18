import React from 'react';
import { ScrollView,  View ,Text, Platform, TouchableWithoutFeedback, Dimensions} from 'react-native';
import FlexBoxx from './flexbox';
import AsyncStorageComponent from './AsyncStorageComponent';







class PlatformMode extends React.Component {

 
compo = Platform.select({
    ios: () => "ios",
    android : () => "android"
})();

  


  render() {

    console.log(this.compo)

   
     
    return (
     


        <View style={styles.container}>
           <Text style={{ backgroundColor: 'blue', marginTop: 100}} >{Dimensions.get("window").width}</Text>
        
        </View>
     

  
   
    )  
  }
}
const styles = {

  container: {
    flex: 1,
    // backgroundColor: Platform == "ios" ? 'red' : '#2c3e50',
    ...Platform.select({
        ios : {
            backgroundColor : 'red'
        },
        android : {
            backgroundColor : 'black'
        },
    }),
},


}


//Not Uderstand May Be One Day
// const Component = Platform.select({
//     ios: () => require("./AsyncStorageComponent"),
//     android : () => require('./flexbox')
// })();


export default PlatformMode;
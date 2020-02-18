import React from 'react';
import { ScrollView,
  
  Button, StyleSheet, Text, View , Image ,
  Animated
} from 'react-native';





//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class AnimationEG extends React.Component {

 state = {
     height: new Animated.Value(0),
     width : new Animated.Value(0),
     opacity: new Animated.Value(0)
 }

  animateImageIn = () => {

    const {opacity, height , width} = this.state

    Animated.spring(opacity , {toValue: 1, speed: 1000}).start()

    Animated.spring(width, {toValue: 300, speed: 1.5}).start()
    Animated.spring(height, {toValue: 300, speed: 1.5}).start()

    //We can use both spring and timing

  }

  animateImageOut = () => {

    const {opacity, height , width} = this.state

    Animated.timing(opacity , {toValue: 0, duration: 1000}).start()

    Animated.spring(width, {toValue: 0, speed: 1.5}).start()
    Animated.spring(height, {toValue: 0, speed: 1.5}).start()


  }
  

  render() {

    

    
     
    return (




     

        <View style={styles.container}>
          <View style={styles.container}>

          {/* ScrollView .text  .view */}
              <Animated.Image
                style = {{
                    opacity: this.state.opacity,
                    width: this.state.width,
                    height: this.state.height
                }}
                source={require("./mk.png")}
              />
          </View>
          <View style={[styles.containerq, {flexDirection: 'row'}]}>
             <Button  title="Animate" onPress={()=> this.animateImageIn()}/>
               <Text>{' '}   {' '}   {' '}</Text>  
             <Button   title="Denimate" onPress={()=> this.animateImageOut()}/>
          </View >
          
        </View>
         
       
     

      
    






   
    )  
  }
}
const styles = {

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
},

containerq: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},

logo: {
    position: 'absolute',
    width: 300,
    height: 100
}

}
export default AnimationEG;
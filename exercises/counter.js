import React from 'react';
import { Button, StyleSheet, Text, View , TouchableOpacity} from 'react-native';




//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class Counter extends React.Component {


    state ={
        num : 1
    }
 
handleIncreaseBtn = () =>{
    this.setState(
        (prevState) => ({
            num: prevState.num+1
        })
    )
}

handleDecreaseBtn = () =>{
    this.setState(
        (prevState) => ({
            num: prevState.num-1
        })
    )
}
  
  

  render() {
     


    return (




     <View style={styles.container} >

            <TouchableOpacity style={styles.btnStyle} onPress={this.handleIncreaseBtn}>
                <Text style={styles.txtStyle}>+</Text>
            </TouchableOpacity>

            <Text  style={styles.txtStyle}>{this.state.num}</Text>

            <TouchableOpacity style={styles.btnStyle} onPress={this.handleDecreaseBtn}>
                <Text  style={styles.txtStyle}>-</Text>
            </TouchableOpacity>



      </View>
    )  
  }
}
const styles = {

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  txtStyle: {
    fontSize : 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    alignItems: 'center',
    margin: 10
    
  },
  btnStyle : {
    width : 50,
    height : 40,
    fontSize: 300,
    backgroundColor : 'blue'
}

}
export default Counter;
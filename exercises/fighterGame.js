import React from 'react';
import { Button, StyleSheet, Text, View , TouchableOpacity} from 'react-native';




//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class FighterGame extends React.Component {


    state ={
        Plyr1Hp : 100,
        Plyr2Hp: 100
    }
 
handlePlayer1Attack = () =>{
   this.setState(
       (prevState) => ({
           Plyr2Hp : prevState.Plyr2Hp - 1
       })
   )
}

handlePlayer2Attack = () =>{
    this.setState(
        (prevState) => ({
            Plyr1Hp : prevState.Plyr1Hp - 1
        })
    )
 }
  
  

  render() {
     


    return (


    <View >

    

    
    <View style={styles.container} >

        
            <Text style={styles.txtStyle}>Player 1</Text>
       



        
            <Text  style={styles.txtStyle}>Player 2</Text>
        



        </View>




        <View style={styles.container}>  
        <Text style={styles.txtStyle}>
            Health = {this.state.Plyr1Hp}
        </Text>

        <Text style={styles.txtStyle}>
        Health = {this.state.Plyr2Hp}
        </Text>
    </View>




     <View style={styles.container} >

            <TouchableOpacity style={styles.btnStyle} onPress={this.handlePlayer1Attack}>
                <Text style={styles.txtStyle}>Attack</Text>
            </TouchableOpacity>

            

            <TouchableOpacity style={styles.btnStyle} onPress={this.handlePlayer2Attack}>
                <Text  style={styles.txtStyle}>Attack</Text>
            </TouchableOpacity>



      </View>

      

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
    width : 100,
    height : 50,
    fontSize: 300,
    backgroundColor : 'skyblue',
    margin: 10
}

}
export default FighterGame;
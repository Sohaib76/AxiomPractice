import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage,Button, Text, View, TextInput, StyleSheet } from 'react-native'

class AsyncStorageComponent extends Component {
   state = {
      'name': ''
   }
   componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
   
   setName = (value) => {
      AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName} placeholder="Enter name"/>
            <Text>
               {this.state.name}
            </Text>
            <Button 
                title="get data" onPress={()=> {
                    AsyncStorage.getItem("name", (e,v) => 
                        console.log(e, "e", v , "v")
                        .then((val) => console.log(val, "done val"))
                        .catch((err) => console.log(err, "error value"))
                    )
                }}
            />
         </View>
      )
   }
}


const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 5,
      height: 100,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
})

export default AsyncStorageComponent
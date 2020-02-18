import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';

class LoginForm extends React.Component{
    render(){
        return(

         <View>
            <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email or Mobile Num' 
               placeholderTextColor='grey'/>

            <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        ref={(input)=> this.passwordInput = input} 
                        placeholder='Password' 
                        placeholderTextColor='grey' 
                        secureTextEntry/>

            <TouchableOpacity style={styles.buttonContainer} 
                                onPress={this.onButtonPress}>
                        <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity> 
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
       },
       input:{
           height: 40,
           backgroundColor: 'rgba(225,225,225,0.2)',
           marginBottom: 10,
           padding: 10,
           color: '#fff'
       },
       buttonContainer:{
           backgroundColor: '#2980b6',
           paddingVertical: 15
       },
       buttonText:{
           color: '#fff',
           textAlign: 'center',
           fontWeight: '700'
       }
})

export default LoginForm;
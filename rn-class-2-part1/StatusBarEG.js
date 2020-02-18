import React, {Component} from 'react';
import { Text, View, StatusBar, TouchableOpacity} from 'react-native';

//For Height and Width COnstants
import {Constants} from 'expo'



//State less function
function DummyStatusBar(props) {

    return(
    <View
        style={{
            height: Constants.statusBarHeight,
            backgroundColor: props.backgroundColor,
           
        }}
    >
        <StatusBar translucent={false} {...props} /> 
    </View>
    )
  }


class StatusBarEG extends React.Component {

 state = {
     bgColor: StatusBar.backgroundColor
 }

  
  handleClick =  (color) =>{
      this.setState({bgColor: color})
  }

  render() {

    

    
     
    return (




     

        <View style={{flex:0}}>
           <DummyStatusBar
                backgroundColor = {'gold'} barStyle='light-content'
           />


            {/**************  UNCOMMENT THIS FOR BUTTONS ******************/}



            {/* <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>

        

                <TouchableOpacity style={[{backgroundColor:'pink' }, styles.button]} onPress={()=> this.handleClick("pink")}>
                    <Text style={{fontSize: 20, }}>Pink</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={[{backgroundColor:'brown' }, styles.button]} onPress={()=> this.handleClick("brown")}>
                    <Text style={{fontSize: 20, }}>Brown</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={[{backgroundColor:'red' }, styles.button]} onPress={()=> this.handleClick("red")}>
                    <Text style={{fontSize: 20, }}>Red</Text>
                </TouchableOpacity>

            </View>

            <DummyStatusBar
                backgroundColor = {this.state.bgColor} barStyle='dark-content'
           /> */}
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
logo: {
    position: 'absolute',
    width: 300,
    height: 100
},
button: {
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: 20
   //Here Style Has More Priority
}

}
export default StatusBarEG;
//https://reactnavigation.org/docs/en/tab-based-navigation.html
import React, {Component} from 'react';
import { ScrollView, 
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Entypo} from '@expo/vector-icons'
import {createStackNavigator, createAppContainer} from 'react-navigation'





//Classes OR Screens
class HomeScreen extends Component{
    render(){
        const navigation = this.props.navigation

        console.log(this.props)

        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is HOME sCREEN and user name is {' '}
                 
                    <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'olive'}}>
                        {navigation.getParam('username').toUpperCase()}
                    </Text>
                    
                 </Text>

                 <TouchableHighlight style={[{backgroundColor: 'navy'}, styles.buttn]}
                    onPress={()=> navigation.navigate('PastP')}
                 >
                     <Text style={{ fontSize: 20, color:'white'}}>Past Papers</Text>
                 </TouchableHighlight>

                 <TouchableHighlight style={[{backgroundColor: 'orange'}, styles.buttn]}
                    onPress={()=> navigation.navigate('Test')}
                 >
                     <Text style={{ fontSize: 20, color:'white'}}>Tests</Text>
                 </TouchableHighlight>
            </View>
         
        )
    }
}


class PastPapers extends Component{
    render(){
        const navigation = this.props.navigation
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is PastPapers Screen</Text>
            
         
         <TouchableHighlight style={[{backgroundColor: 'blue'}, styles.buttn]} onPress={()=> navigation.navigate("Test")}>
                     <Text style={{ fontSize: 20, color:'white'}}>Go To Tests</Text>
        </TouchableHighlight>
        </View>
        )
    }
}


class Tests extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is Test Page</Text>
            

            <TouchableHighlight style={[{backgroundColor: 'blue'}, styles.buttn]} 
                onPress={()=> this.props.navigation.goBack()}>

                {/* Go to the previous screen. */}

                <Text style={{ fontSize: 20, color:'white'}}>Go To Main Screen</Text>
            </TouchableHighlight>

            </View>
         
        )
    }
}

//TabNavigator
const StackNavigator = createStackNavigator(
{
    //ROUTESSS

    Home : {
        screen: HomeScreen,
        params : {username: 'pinger'},
        navigationOptions: {
            title: "Welcome Screen"
        }
    },
    PastP : {
        screen: PastPapers,
        navigationOptions: {
            title: "Here You Can See Past Papers",
            headerBackImage: ()=> <Entypo name="back" size={20} color='blue'/>,
        }
    },
    Test : {
        screen: Tests,
        navigationOptions: {
            title: "This is Last Screen",
           headerBackImage: ()=> <Entypo name="back" size={20} color='blue'/>,
        }
    },

},
{
    //STYLINGGG
    initialRouteName : "Home",
    
  
}
);


const styles =  {
    buttn : {
       
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 5,
        width: 150,
        height: 80,
        margin : 20
    }
}



export default StackNavigatorEG = createAppContainer(StackNavigator);
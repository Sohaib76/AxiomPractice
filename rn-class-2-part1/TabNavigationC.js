//https://reactnavigation.org/docs/en/tab-based-navigation.html
import React, {Component} from 'react';
import { ScrollView, 
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Feather} from '@expo/vector-icons'
import {createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import { colors } from 'react-native-elements';
import StyleComponent from './StyleComponent';



//Classes OR Screens
class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is HOME</Text>
            </View>
         
        )
    }
}


class FirstYear extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is FirstYear</Text>
            </View>
         
        )
    }
}


class SecondYear extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is SecondYear</Text>
            </View>
         
        )
    }
}

//TabNavigator
const TabNavigator = createMaterialTopTabNavigator(
{
    //ROUTESSS

    Home : {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="home" size={20} color='blue'/>,
            tabBarLabel: "Fish Off"
        }
    },
    First : {
        screen: FirstYear,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="info" size={20} color='blue'/>,
        }
    },
    Second : {
        screen: StyleComponent,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="mail" size={20} color='blue'/>,
        }
    },

},
{
    //STYLINGGG
    initialRouteName : "Home",
    tabBarPosition: "top",
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: 'true',
        labelStyle:{
            fontSize: 15,
            color: 'black'
        },
        tabStyle: {
            // width: 200
        },
        style: {
            backgroundColor: "gold",
            borderRadius: 8
        },
        indicatorStyle: {
            backgroundColor: 'red'
        }



      },
      order: ["First", "Second", 'Home']
  
}
);






export default TabNavigationC = createAppContainer(TabNavigator);
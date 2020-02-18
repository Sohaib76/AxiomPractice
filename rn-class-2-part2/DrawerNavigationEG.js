//https://reactnavigation.org/docs/en/tab-based-navigation.html
import React, {Component} from 'react';
import { ScrollView, 
  Button, StyleSheet, Text, View , Image,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Feather} from '@expo/vector-icons'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'





//Classes OR Screens
class HomeScreen extends Component{
    render(){
        const navigation = this.props.navigation

        console.log(this.props)

        return(
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                 <Text style={{fontSize: 30}}>This Is HOME sCREEN Of 
                 
                        Drawer NAvigator and user name is {' '}
                 
                    <Text style={{fontStyle: 'italic', fontWeight: 'bold', color: 'olive'}}>
                        {navigation.getParam('username').toUpperCase()}
                    </Text>
                    
                 </Text>

                 <TouchableHighlight style={[{backgroundColor: 'navy'}, styles.buttn]}
                    onPress={()=> navigation.openDrawer()}
                 >
                     <Text style={{ fontSize: 20, color:'white'}}>oPen Drawer</Text>
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
const DrawerNavigator = createDrawerNavigator(
{
    //ROUTESSS

    Home : {
        screen: HomeScreen,
        params : {username: 'pinger'},
        navigationOptions: {
            drawerLabel: "Welcome Screen",
            drawerIcon: ()=> <Feather name="home" size={20} color='blue'/>
        }
    },
    PastP : {
        screen: PastPapers,
        navigationOptions: {
            drawerLabel: "Past Papers",
            drawerIcon: ()=> <Feather name="info" size={20} color='blue'/>,
        }
    },
    Test : {
        screen: Tests,
        navigationOptions: {
            drawerLabel: "Test Papers",
           drawerIcon: ()=> <Feather name="mail" size={20} color='blue'/>,
        }
    },

},
{
    //STYLINGGG
    initialRouteName : "Home",
    drawerBackgroundColor: 'silver',
    drawerPosition: 'right'
    
  
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



export default DrawerNavigationEG = createAppContainer(DrawerNavigator);
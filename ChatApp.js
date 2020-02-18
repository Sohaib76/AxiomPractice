import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, 
  Button, ThemeProvider , Card, Icon, ListItem, PricingCard, SearchBar, ScrollView} from 'react-native-elements'
import MyChat from './MyChat(Pusher)';
//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


  class App extends React.Component {

    


  state = {
    search: '',
  };


  updateSearch = search => {
    this.setState({ search });
  };


  state = {
    messages: []
  };

  componentDidMount() {
    // subscribe(CHANNEL, messages => {
    //   this.setState({messages});
    // });

  //   this.setState({
  //     messages: [
  //       {
  //         _id: 1,
  //         text: "I think we passed the first step of the tutorial. We will now need a Pusher account!",
  //         createdAt: new Date(),
  //         user: {
  //           _id: 1,
  //           name: "React Native",
  //           avatar: "https://placeimg.com/140/140/any"
  //         }
  //       }
  //     ]
  //   });
  }

 

  render() {
    const NAME = 'SZ';
    const CHANNEL = 'Reactivate';

    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
     
    ]

    const { search } = this.state;
   
    return (


      // <GiftedChat messages={this.state.messages} />

      <MyChat/ >



//       <View style={styles.containerStyle}>

        

              // <SearchBar
              //         placeholder="Type Here..."
              //         onChangeText={this.updateSearch}
              //         value={search}
              //       />


//               <Text>SAFKa</Text>
//                   <ThemeProvider>
//                 <Button title="Hey!" />
//               </ThemeProvider>

            

                          
                    

//               <Card
//                 title='HELLO WORLD'
//                 // image={require('../images/pic2.jpg')}
//                 >
//                 <Text style={{marginBottom: 10}}>
//                   The idea with React Native Elements is more about component structure than actual design.
//                 </Text>
//                 <Button
//                   icon={<Icon name='code' color='#ffffff' />}
//                   backgroundColor='#03A9F4'
//                   buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//                   title='VIEW NOW' />
//               </Card>





//               <View>
//                 {
//                   list.map((l, i) => (
//                     <ListItem
//                       key={i}
//                       leftAvatar={{ source: { uri: l.avatar_url } }}
//                       title={l.name}
//                       subtitle={l.subtitle}
//                     />
//                   ))
//                 }
//               </View>



//               <PricingCard
//                 color="#4f9deb"
//                 title="Free"
//                 price="$0"
//                 info={['1 User', 'Basic Support', 'All Core Features']}
//                 button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
//               />

// <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>

              
                /* <View style={styles.containerStyle}>

                    <FormLabel>User ID</FormLabel>

                    <FormInput/>

                </View>

                <View style={styles.containerStyle}>

                    <FormLabel>Nickname</FormLabel>

                    <FormInput/>

                </View>

                <View style={styles.containerStyle}>

                    <Button

                        buttonStyle={{backgroundColor: '#2096f3'}}

                        title='Connect' 

                    />

                </View>

                <View style={styles.containerStyle}>

                    <FormValidationMessage>Error message</FormValidationMessage>

                </View> */

     

  // </View>
    );
  }
}


const styles = {

  containerStyle: {

      marginTop: 10

  },
  contentContainer: {
    paddingVertical: 20
  }

}

export default App;
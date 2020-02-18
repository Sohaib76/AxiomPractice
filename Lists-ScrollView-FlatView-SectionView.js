import React from 'react';
import { ScrollView, FlatList, SectionList}
from 'react-native';


//import { GiftedChat } from "react-native-gifted-chat";
//import {send, subscribe} from 'react-native-training-chat-server';


class Lists extends React.Component {

  names = [
   { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    { name : "Iqbal"},
    {name : "Arif"},
    {name : "Kamran"}
  ]
  

  render() {

   
     
    return (



      //FlatView >>   RecyclerView
      //ScrollView   >>  ListView
      //SectionView >> Extended Version of Flat view
     <View style={styles.View} >

      <FlatList
        data={this.names} 
        keyExtractor = {(item,index) => index.toString()}
        renderItem={({item}) => <Text>{item.name}</Text> }
        
      />

     <SectionList
      renderItem={({item, index}) => <Text >{item}</Text>}
      renderSectionHeader={({section: {title}}) =>(
        <Text style={styles.txtStyle}>{'\n'}{title}{'\n'}</Text>
      )}

      sections = {
        [
        
        { title: 'Human', data: ['Living', 'Dead'] },
        { title: 'Human', data: ['Living', 'Dead'] },
        { title: 'Human', data: ['Living', 'Dead'] },
        ]
      }
      
      keyExtractor = {(item,index) => index.toString()}
     />

    

    <ScrollView>
     {
       this.names.map((n) => <Text>{n.name}</Text>)
     }
     </ScrollView>


     
        <Text>Hj</Text>
      </View>
    )  
  }
}
const styles = {

 
  txtStyle: {
    fontSize : 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  }

}
export default Lists;
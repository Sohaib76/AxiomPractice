import React from 'react';
import { ScrollView,  View ,Text, Platform, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components/native'


// For Writing CSS in React-native

const StyledView = styled.View`
    flex: 1;
    justify-content: center;
    background-color: black;
`


const StyledText = styled.Text`
    font-style: italic ;
    font-size: 25px;
    background-color: black;
`


const StyledTouchableHighlight = styled.TouchableHighlight`
    width: 200px;
    justify-content: center;
    background-color: yellow;
    border: 2px;
    border-color: brown;
`



class StyleComponent extends React.Component {



  render() {

     
    return (
     <StyledView>
         <StyledText>
             This is styled Text {'\n'} {'\n'}
         </StyledText>
         <Text>
             This is simple Text {'\n'} {'\n'}
         </Text>

         <TouchableOpacity style={{borderWidth: 2, backgroundColor: 'purple', width : 200}}>
            <StyledText>Btn Text With StyledText</StyledText>
         </TouchableOpacity>

         <StyledTouchableHighlight onPress={ ()=> alert("wowo")}>
             <StyledText>
                 Styled TouchableHighlight
             </StyledText>
         </StyledTouchableHighlight>
     </StyledView>

    
        
     

  
   
    )  
  }
}
const styles = {

  container: {
    flex: 1,
    // backgroundColor: Platform == "ios" ? 'red' : '#2c3e50',
    
},


}





export default StyleComponent;
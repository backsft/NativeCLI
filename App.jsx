import {View, Text, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello Everyone</Text>

      <Image style={{width:200,height:300}}
        source={{
          uri: 'https://thumbs.dreamstime.com/z/high-speed-internet-connection-13421823.jpg?ct=jpeg',
        }}
      />
    
      <TouchableOpacity style={{padding:10,backgroundColor:"green"}} onPress={()=>Alert.alert("button pressed")}><Text>Hello</Text></TouchableOpacity>
    
      <TouchableHighlight style={{padding:10,backgroundColor:"green"}} onPress={()=>Alert.alert("button pressed")}><Text>Hello</Text></TouchableHighlight>
    
        <Pressable style={{padding:10,backgroundColor:"yellow"}}  >
          <Text>Press Me</Text>

        </Pressable>
    </SafeAreaView>
  );
};

export default App;

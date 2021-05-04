import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

import Weeks from "Components/Weeks";



const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function App() {
  const [oneRepMax, setOneRepMax] = useState(0);


  return (
    <View style={styles.container}>
      <Text>Fitness Tracker App</Text>
      <Text>Make a wireframe for this</Text>
      <Text>Put your One Rep Max here</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setOneRepMax(text)}
          value= {oneRepMax.toString()}
        />
      </View>
      <Weeks />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  week: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer:{
    borderColor: "black",
    borderWidth: 5,
    width: deviceWidth / 2,
  },
  textInput: {
    textAlign: 'center'
  }
});

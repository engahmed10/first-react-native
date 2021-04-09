import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello There, this is my first page for learning react native!</Text>
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
  },text:{
     fontWeight:"bold",
     fontFamily:"Lato",
     color:"red",
     fontFamily:"sans-serif",
     position:"absolute",
     top:"200px",
     fontSize:"40px"
     
  }

});

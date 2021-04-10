import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import React,{useEffect} from 'react'
import data from './src/data'
import {Image}   from 'react-native'

export default function App() {






const movies=()=>{
       
       console.log(data)

      return  data.movie.map((movie)=>
         {
         return   <div>
         
           <img src={movie.url} style={{width:"200px",height:"200px"}} />
            <h2>{movie.name}</h2>
           </div>
         }
       )


}


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello There, this is my first page for learning react native!</Text>
      <StatusBar style="auto" />
      {movies()}
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

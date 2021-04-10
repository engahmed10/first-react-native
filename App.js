import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList,Platform,View, Text, StyleSheet } from 'react-native';
import axios from 'axios'
import React,{useEffect} from 'react'
import data from './src/data'
import {Image}   from 'react-native'
import { Content } from 'native-base'


export default function App() {



  return (
   
       <FlatList 
       data={data}
       keyExtractor={(item,index)=>index}
       renderItem={({item,index})=>(
        
           <View style={styles.container}> 
           {item.movie.map((movie)=>(
                <View style={styles.box}>
                  <img src={movie.url} style={{width:"250px",height:"150px"}} />
                  <h4>{movie.name}</h4>
                 </View>
            ) )}
            </View>
         
       )}
  
      />

  );
} 

const styles = StyleSheet.create({
  container: {
   flex:1,
   flexDirection:'row',
   flexWrap:'wrap',
    backgroundColor: 'red',
    alignItems: 'flex-start',
    margin:30,
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
   
  },text:{
     fontWeight:"bold",
     color:"red",
     fontFamily:"sans-serif",
     position:"absolute",
     top:"200px",
     fontSize:"40px"
  },
  box:{
   
    alignItems:"center",
    borderWidth:1,
    margin:10,
    border: '1px solid rgba(0, 0, 0, 0.8)',
    textAlign: 'center',
    boxShadow: '5px 5px 30px rgba(0,0,0,0.9)',
    borderRadius: '18px',
    padding:'2em',
    backgroundColor:'green',

  }


  
});

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList,Platform,View, Text, StyleSheet } from 'react-native';
import data from './../data'
import {Image}   from 'react-native'
import { Content } from 'native-base'
import MovieCard  from './movieCard'
import React from 'react';

export default function MovieList() {

  return (
   
       <FlatList 
       data={data}
       keyExtractor={(item,index)=>index}
       renderItem={({item,index})=>(
        
           <View style={styles.container}> 
           {item.movie.map((movie)=>(             
             <View>
             <MovieCard  movie={movie}   style={styles} />
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
     color:"black",
     fontFamily:"sans-serif",
     fontSize:"20px",
     alignItems:"center",
  },
  box:{
   
  
    borderWidth:1,
    margin:10,
    border: '1px solid rgba(0, 0, 0, 0.8)',

    boxShadow: '5px 5px 30px rgba(0,0,0,0.9)',
    borderRadius: '18px',
    padding:'2em',
    backgroundColor:'green',

  }


  
});

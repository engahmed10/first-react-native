import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList,Platform,View, Text, StyleSheet,Button } from 'react-native';
import data from './../data'
import {Image}   from 'react-native'
import { Content } from 'native-base'
import MovieCard  from './movieCard'
import React from 'react';

export default function MovieList({navigation}) {

  return (
   <>
     <Button title="About"  onPress={()=>navigation.navigate('About') } />
     <Button title="Contact"  onPress={()=>navigation.navigate('Contact') } />
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
</>
  );
} 

const styles = StyleSheet.create({
  container: {
   flex:1,
   flexDirection:'row',
   flexWrap:'wrap',
    backgroundColor: 'white',
    alignItems: 'flex-start',
     borderRadius: 18,
    margin:40,
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
   
  },text:{
     fontWeight:"bold",
     color:"black",
     fontFamily:"sans-serif",
     fontSize:20,
     alignItems:"center",
  },
  box:{
  
    borderWidth:1,
    margin:15,
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 5,
    borderWidth: 5,
    borderWidth: 30,
    borderColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 18,
    padding:20,
    backgroundColor:'green',

  }  
});

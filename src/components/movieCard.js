import React from 'react';
import { Image,SafeAreaView, FlatList,Platform,View, Text, StyleSheet } from 'react-native';

const MovieCard = (props) => {

    console.log(props)
    return  <View>
                <View style={props.style.box}>
                  <Image source={props.movie.url}  style={{width:200,height:200}}/>
                </View>
                 <View style={props.style.text}>
                   <Text>{props.movie.name}</Text> 
                 </View>
             </View>
};
export default MovieCard;
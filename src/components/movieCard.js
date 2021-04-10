import React from 'react';
import { SafeAreaView, FlatList,Platform,View, Text, StyleSheet } from 'react-native';

const MovieCard = (props) => {

    console.log(props)
    return  <View>
                <View style={props.style.box}>
                  <img src={props.movie.url} style={{width:"250px",height:"150px"}} />
                </View>
                 <View style={props.style.text}>
                  <h4  >{props.movie.name}</h4>
                 </View>
             </View>
};
export default MovieCard;
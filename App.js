import  React,{Component} from 'react'
import MovieList from './src/components/movieList'
import About from './src/components/about'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native"

import {AppRegistry} from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =createStackNavigator();

 class  App extends Component{

 render() {
     return (
       
    <>
    <StatusBar barStyle="sark-content"/>
  
        <NavigationContainer>
         <Stack.Navigator  >
            <Stack.Screen name="Movies" component={MovieList} /> 
            <Stack.Screen   name="about" component={About} />
            </Stack.Navigator >

        </NavigationContainer>


   </>
     );
 }    
 }
export default App


AppRegistry.registerComponent('App',()=>App);

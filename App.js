import  React,{Component} from 'react'
import MovieList from './src/components/movieList'
import About from './src/components/about'
import Contact from './src/components/contact'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native"
import {AppRegistry} from 'react-native' 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from 'react-native-screens'
import { enableScreens } from 'react-native-screens';

enableScreens(false);


const Stack =createStackNavigator();
 class  App extends Component{

 render() {
     return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }} >
             <Stack.Screen name="MovieList" component={MovieList}
                  options={{
                         title: 'My MovieList',
                          }}
             />  
            <Stack.Screen name="Contact" component={Contact} 
                           options={{headerLargeTitle: true}}
               /> 
                     <Stack.Screen  name="About" component={About} 
                       options={{headerLargeTitle: true}}
                     
                     />
                     </Stack.Navigator >
        </NavigationContainer>
     );
 }    
 }
export default App

AppRegistry.registerComponent('App',()=>App);

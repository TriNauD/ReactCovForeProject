/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator} from '@react-navigation/stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import {  Text, View } from 'react-native';
 import MainPage from './android/app/page/MainPage';
 import DataShowPage from './android/app/page/DataShowPage';
 import ForecastPage from './android/app/page/ForecastPage';
 
 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 
 function HomeScreen() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="MainPage" component={MainPage}/>
       <Stack.Screen name="DataShowPage" component={DataShowPage}/>
       <Stack.Screen name="ForecastPage" component={ForecastPage}/>
     </Stack.Navigator>
   );
 }
 
 function UserScreen() {
   return (  
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>User Screen</Text>
     </View>
   );
 }
 
 function App() {
     return (
       <NavigationContainer>
         <Tab.Navigator
           tabBarOptions={{
             activeTintColor: 'tomato',
             inactiveTintColor: 'gray',
           tabStyle : {
             backgroundColor: '#ddd',
             paddingBottom: 15,
             borderRightWidth: 1,
             borderRightColor: '#fff'
           },
         }}>
           <Tab.Screen name="Home" component={HomeScreen} />
           <Tab.Screen name="Login" component={UserScreen} /> 
         </Tab.Navigator>
       </NavigationContainer>
     );
 }
 export default App;

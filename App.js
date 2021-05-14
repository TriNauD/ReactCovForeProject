/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import MainPage from './android/app/page/MainPage';
import DataShowPage from './android/app/page/DataShowPage';
import ForecastPage from './android/app/page/ForecastPage';
import CreateForecastPage from './android/app/page/CreateForecastPage';
import ModelManagePage from './android/app/page/ModelManagePage';
import CreateModelPage from './android/app/page/CreateModelPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DataShowPage"
        component={DataShowPage}
        options={{title: '疫情数据展示', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ForecastPage"
        component={ForecastPage}
        options={{title: '疫情预测', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="CreateForecastPage"
        component={CreateForecastPage}
        options={{title: '新建预测', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ModelManagePage"
        component={ModelManagePage}
        options={{title: '模型管理', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="CreateModelPage"
        component={CreateModelPage}
        options={{title: '新建模型', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}

function UserScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2D77F9',
          inactiveTintColor: 'gray',
          tabStyle: {
            backgroundColor: '#ddd',
            paddingBottom: 15,
            borderRightWidth: 1,
            borderRightColor: '#fff',
          },
        }}>
        <Tab.Screen name="首页" component={HomeScreen} />
        <Tab.Screen name="我的" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;

import React from 'react'
import {View} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './../views/home/home';
import ProfileScreen from './../views/profile/profile'
import TopBar from '../components/TopBar'

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <>
    <View style={{marginTop:25}}>
       <TopBar/>
    </View>
      <Tab.Navigator   tabBarOptions={{
        labelStyle: { fontSize: 12 ,color:'#fff',fontWeight:'bold'},
        indicatorStyle:{backgroundColor:'#fff'},
        style:{backgroundColor: '#FF073A'},
      }}
        >
        <Tab.Screen name="Home" component={HomeScreen} style={{color:'#fff'}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
}
import React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stack/MainStack'


export default function App() {
  return (
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>     
  );
}

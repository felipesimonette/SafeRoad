import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, TextInput} from 'react-native';
import Login from './src/pages/login/';
import {MyStack} from './src/rotas/';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

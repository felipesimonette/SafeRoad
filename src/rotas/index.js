import {createStackNavigator} from '@react-navigation/stack';
import Cadastro from '../pages/cadastro';
import Login from '../pages/login';
import Chamados from '../pages/chamados';
import React from 'react';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Chamados" component={Chamados} />
    </Stack.Navigator>
  );
}

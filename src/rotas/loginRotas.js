import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cadastro from '../pages/cadastro';
import Login from '../pages/login';
import Chamados from '../pages/chamados';

const Stack = createStackNavigator();

export default function LoginRotas() {
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

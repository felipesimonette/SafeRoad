import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import LoginRotas from './loginRotas';
import MenuRotas from './menuRotas';
import Login from '../pages/cadastro';

export default function Rotas() {
  const login = useSelector((state) => state.login);
  return (
    <NavigationContainer>
      {login ? <MenuRotas /> : <LoginRotas />}
    </NavigationContainer>
  );
}

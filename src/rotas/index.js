import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Chamados from '../pages/chamados';
import Menu from '../pages/menu';

import LoginRotas from './loginRotas';

export default function Rotas() {
  const login = useSelector((state) => state.login);
  return (
    <NavigationContainer>
      {login ? <Menu /> : <LoginRotas />}
    </NavigationContainer>
  );
}

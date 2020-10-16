import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Chamados from '../pages/chamados';
import MeusChamados from '../pages/meusChamados';
import Configuracoes from '../pages/configuracoes';
// import BotttomBar from '../components/bottomBar';

export default function MenuRotas() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chamados" component={Chamados} />
      <Tab.Screen name="Meus Chamados" component={MeusChamados} />
      <Tab.Screen name="Configurações" component={Configuracoes} />
    </Tab.Navigator>
  );
}

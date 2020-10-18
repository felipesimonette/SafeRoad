import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

import Chamados from '../pages/chamados';
import MeusChamados from '../pages/meusChamados';
import Configuracoes from '../pages/configuracoes';
import BotttomBar from '../components/bottomBar';

export default function MenuRotas() {
  return (
    <>
      <Tab.Navigator
        tabBar={({descriptors}) => <BotttomBar descriptors={descriptors} />}>
        <Tab.Screen
          name="mapa"
          component={Chamados}
          options={{
            name: 'mapa',
            title: 'mapa',
            notFocusIcon: 'map-outline',
            focusIcon: 'map',
          }}
        />
        <Tab.Screen
          name="meusChamados"
          component={MeusChamados}
          options={{
            name: 'meusChamados',
            title: 'Meus Chamados',
            notFocusIcon: 'build-outline',
            focusIcon: 'build',
          }}
        />
        <Tab.Screen
          name="configuracoes"
          component={Configuracoes}
          options={{
            name: 'configuracoes',
            title: 'Configurações',
            notFocusIcon: 'settings-outline',
            focusIcon: 'settings',
          }}
        />
      </Tab.Navigator>
    </>
  );
}

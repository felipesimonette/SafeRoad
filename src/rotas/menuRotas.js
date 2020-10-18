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
          options={({navigation}) => {
            return {
              name: 'mapa',
              title: 'mapa',
              notFocusIcon: 'map-outline',
              focusIcon: 'map',
              isFocused: navigation.isFocused,
            };
          }}
        />
        <Tab.Screen
          name="meusChamados"
          component={MeusChamados}
          options={({navigation}) => {
            return {
              name: 'meusChamados',
              title: 'Meus Chamados',
              notFocusIcon: 'build-outline',
              focusIcon: 'build',
              isFocused: navigation.isFocused,
            };
          }}
        />
        <Tab.Screen
          name="configuracoes"
          component={Configuracoes}
          options={({navigation}) => {
            return {
              name: 'configuracoes',
              title: 'Configurações',
              notFocusIcon: 'settings-outline',
              focusIcon: 'settings',
              isFocused: navigation.isFocused,
            };
          }}
        />
      </Tab.Navigator>
    </>
  );
}

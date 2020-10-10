import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';

export default function Chamados() {

  function ValidaReporte() {
    Alert.alert('Report efetuado com sucesso.');
  }

  return (
    <LinearGradient
      colors={['#FF8C00', '#FFA500', '#FFD700']}
      style={style.container}>
      <StatusBar backgroundColor="#FF8C00"></StatusBar>
      <View style={style.body}>
        <View>
        <Text style={style.Textbutton}>Digite o reporte:</Text>
          <TextInput style={style.input} placeholder=" "></TextInput>
          <TouchableOpacity
            style={style.button}
            activeOpacity={0.5}
            onPress={ValidaReporte}>
            <Text style={style.Textbutton}>REPORTAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

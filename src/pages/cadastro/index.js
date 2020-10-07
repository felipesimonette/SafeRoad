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

export default function Login() {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  function ValidaLogin() {
    if (user === 'admin' && senha === 'admin') {
      Alert.alert('Login efetuado com sucesso.');
    } else {
      Alert.alert('Usuário ou senha incorretos.');
    }
  }

  function ValidaCadastro() {
    Alert.alert('Cadastro efetuado com sucesso.');
  }

  return (
    <LinearGradient
      colors={['#FF8C00', '#FFA500', '#FFD700']}
      style={style.container}>
      <StatusBar backgroundColor="#FF4500"></StatusBar>
      <View style={style.body}>
        <Image></Image>
        <View>
          <TextInput
            style={style.input}
            placeholder="NOME COMPLETO"></TextInput>
          <TextInput style={style.input} placeholder="E-MAIL"></TextInput>
          <TextInput style={style.input} placeholder="CPF"></TextInput>
          <TextInput style={style.input} placeholder="USUÁRIO"></TextInput>
          <TextInput
            style={style.input}
            placeholder="SENHA"
            secureTextEntry={true}></TextInput>
          <TouchableOpacity
            style={style.button}
            activeOpacity={0.5}
            onPress={ValidaCadastro}>
            <Text style={style.Textbutton}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

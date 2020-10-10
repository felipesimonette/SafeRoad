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
import {useDispatch} from 'react-redux';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  function ValidaLogin() {
    if (user === 'admin' && senha === 'admin') {
      Alert.alert('Login efetuado com sucesso.');
      dispatch({type: 'LOGIN', login: true});
    } else {
      Alert.alert('Usuário ou senha incorretos.');
    }
  }

  return (
    <LinearGradient
      colors={['#FF8C00', '#FFA500', '#FFD700']}
      style={style.container}>
      <StatusBar backgroundColor="#FF4500"></StatusBar>
      <View style={style.body}>
        <Image
          style={style.imagemLogo}
          source={require('../../assets/images/logoSafeRoad.png')}></Image>
        <View>
          <TextInput
            style={style.input}
            placeholder="USUÁRIO"
            onChangeText={setUser}></TextInput>
          <TextInput
            style={style.input}
            placeholder="SENHA"
            secureTextEntry={true}
            onChangeText={setSenha}></TextInput>
          <TouchableOpacity
            style={style.button}
            activeOpacity={0.5}
            onPress={ValidaLogin}>
            <Text style={style.Textbutton}>CONECTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
            style={{}}
            activeOpacity={0.5}>
            <Text
              style={{
                color: '#8B008B',
                alignSelf: 'center',
                textDecorationLine: 'underline',
                fontSize: 21,
                fontWeight: 'bold',
              }}>
              CADASTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

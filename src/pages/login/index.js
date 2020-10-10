import React, {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import style from './style';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const {width} = Dimensions.get('window');
  const {height} = Dimensions.get('window');

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
    <View
      style={{
        flex: 1,
        backgroundColor: '#FF8C00',
        padding: 20,
        // justifyContent: 'space-evenly',
      }}>
      <StatusBar backgroundColor="#FF8C00"></StatusBar>
      <View
        style={{
          height: height,
          width: height,
          borderWidth: 100,
          borderColor: '#c9c9c9',
          transform: [{rotate: '45deg'}],
          position: 'absolute',
          bottom: 0,
          top: 0,
          right: 200,
          zIndex: 1,
        }}
      />
      <View style={{zIndex: 10, flex: 1, justifyContent: 'space-evenly'}}>
        <Image
          source={require('../../assets/images/login-image.png')}
          style={{width: 300, height: 100, alignSelf: 'center'}}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255, 0.8)',
                justifyContent: 'center',
                alignItems: 'center',
                width: '15%',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <Icon name="user-alt" size={20} color="#969696" />
            </View>
            <TextInput
              placeholder="USUÁRIO"
              // autoCapitalize={false}
              style={{
                backgroundColor: 'rgba(255,255,255, 0.8)',
                flex: 1,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255, 0.8)',
                justifyContent: 'center',
                alignItems: 'center',
                width: '15%',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <Icon name="lock" size={20} color="#969696" />
            </View>
            <TextInput
              placeholder="SENHA"
              secureTextEntry={true}
              style={{
                backgroundColor: 'rgba(255,255,255, 0.8)',
                flex: 1,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 30,
              paddingVertical: 15,
              marginTop: 20,
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 17, color: '#4F4F4F'}}>ENTRAR</Text>
          </TouchableOpacity>

          <View
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: 'blue',
                  textDecorationLine: 'underline',
                }}>
                Cadastrar-se
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                color: '#000',
              }}>
              ou
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: 'blue',
                  textDecorationLine: 'underline',
                }}>
                Recuperar Senha
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import style from './style';
import InformationModal from '../../components/informationModal';

const {timing, Value} = Animated;

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const {height} = Dimensions.get('window');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('loading');

  const [user, setUser] = useState('');
  const usertInputScale = new Value(1);

  const [senha, setSenha] = useState('');
  const senhaRef = useRef(null);
  const senhaInputScale = new Value(1);

  const imageScale = new Value(1);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    handleImageScale(0.5);
  };

  const _keyboardDidHide = () => {
    handleImageScale(1);
  };

  const handleImageScale = (value) => {
    timing(imageScale, {
      toValue: value,
      timing: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleInputScale = (inputType, value) => {
    console.log(inputType == 'user');
    if (inputType == 'user') {
      timing(usertInputScale, {
        toValue: value,
        timing: 500,
        useNativeDriver: true,
      }).start();
    } else {
      timing(senhaInputScale, {
        toValue: value,
        timing: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  function ValidaLogin() {
    setShowModal(true);
    if (user === 'admin' && senha === 'admin') {
      dispatch({type: 'LOGIN', login: true});
      setShowModal(false);
    } else {
      setModalType('error');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <InformationModal
          type={modalType}
          visible={showModal}
          errorText={'Usuário ou senha inválidos'}
          setVisible={setShowModal}
        />
        <StatusBar backgroundColor="#FF8C00"></StatusBar>
        <View style={style.backgroundArrow(height)} />
        <View style={style.body}>
          <Animated.Image
            source={require('../../assets/images/login-image.png')}
            style={{
              width: 300,
              height: 100,
              alignSelf: 'center',
              transform: [{scale: imageScale}],
            }}
          />
          <View>
            <Animated.View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                transform: [{scale: usertInputScale}],
              }}>
              <View style={style.iconInput}>
                <Icon name="user-alt" size={20} color="#969696" />
              </View>
              <TextInput
                placeholder="USUÁRIO"
                autoCapitalize="none"
                onFocus={() => handleInputScale('user', 1.05)}
                onBlur={() => handleInputScale('user', 1)}
                style={style.defaultInput}
                onChangeText={setUser}
                onSubmitEditing={() => senhaRef.current.focus()}
              />
            </Animated.View>
            <Animated.View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                transform: [{scale: senhaInputScale}],
              }}>
              <View style={style.iconInput}>
                <Icon name="lock" size={20} color="#969696" />
              </View>
              <TextInput
                placeholder="SENHA"
                ref={senhaRef}
                secureTextEntry={true}
                onFocus={() => handleInputScale('', 1.05)}
                onBlur={() => handleInputScale('', 1)}
                style={style.defaultInput}
                onChangeText={setSenha}
                onSubmitEditing={ValidaLogin}
              />
            </Animated.View>
            <TouchableOpacity style={style.button} onPress={ValidaLogin}>
              <Text style={{fontSize: 17, color: '#4F4F4F'}}>ENTRAR</Text>
            </TouchableOpacity>
            <View style={style.footer}>
              <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={style.hyperLink}>Cadastrar-se</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                }}>
                ou
              </Text>
              <TouchableOpacity>
                <Text style={style.hyperLink}>Recuperar Senha</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

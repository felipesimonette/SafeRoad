import React, {useState} from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  TextInput,
  Switch,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Configuracoes() {
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{flex: 1, backgroundColor: '#FF8C00', padding: 20}}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 40,
          borderRadius: 90,
          alignSelf: 'center',
          elevation: 20,
        }}>
        <Icon name="user-alt" size={70}></Icon>
      </View>

      <View
        style={{
          elevation: 20,
          marginVertical: 25,
          borderRadius: 10,
          backgroundColor: 'white',
          padding: 20,
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>NOME</Text>
          <TextInput style={{borderBottomWidth: 1, paddingBottom: 0}}>
            Ronaldo Siqueira
          </TextInput>
        </View>
        <View>
          <Text>E- MAIL</Text>
          <TextInput style={{borderBottomWidth: 1, paddingBottom: 0}}>
            teste@gmail.com
          </TextInput>
        </View>
        <View>
          <Text>CELULAR</Text>
          <TextInput style={{borderBottomWidth: 1, paddingBottom: 0}}>
            +55 (015) 94948-5949
          </TextInput>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>NOTIFICAÇÕES</Text>
          <Switch
            trackColor={{false: '#767577', true: '#FF8C00'}}
            thumbColor={isEnabled ? '#FF4500' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          padding: 12,
          alignItems: 'center',
          marginTop: 'auto',
          borderRadius: 90,
          elevation: 60,
          marginBottom: 25,
        }}
        onPress={() =>
          Alert.alert('ATENÇÃO', 'Deseja salvar as alterações?', [
            {text: 'SIM'},
            {text: 'NÃO'},
          ])
        }>
        <Text style={{fontSize: 18, color: 'black'}}>SALVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          padding: 12,
          alignItems: 'center',
          marginTop: 'auto',
          borderRadius: 90,
          elevation: 60,
        }}
        onPress={() =>
          Alert.alert('ATENÇÃO', 'Deseja sair?', [
            {
              text: 'SIM',
              onPress: () => dispatch({type: 'LOGIN', action: false}),
            },
            {text: 'NÃO'},
          ])
        }>
        <Text style={{fontSize: 18, color: 'black'}}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}


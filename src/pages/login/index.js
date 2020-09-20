import React, {useState} from 'react';
import {View, StatusBar, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';

export default function Login() {

  const [user, setUser] = useState('bife');

  function ValidaLoguinho() {
    console.log(user);
  }

  return (
    <LinearGradient
      colors={['#192f6a', '#3b5998', '#4c669f']}
      style={style.container}>
      <StatusBar backgroundColor="darkblue"></StatusBar>
      <View style={style.body}>
      <Text style={style.inputTitle}>LOGUINHO</Text>
        <TextInput
          style={style.input}
          placeholder="USER"
          onChangeText={(e)=>setUser(e)}></TextInput>
        <TextInput
          style={style.input}
          placeholder="PASSWORD"
          secureTextEntry={true}></TextInput>
        <TouchableOpacity
          style={style.button}
          activeOpacity={0.5}
          onPress={()=>ValidaLoguinho()}>
          <Text style={style.Textbutton}>GORDURA</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

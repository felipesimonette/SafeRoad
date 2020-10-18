import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';

export default function Configuracoes() {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Button
        title="SAIR"
        onPress={() => dispatch({type: 'LOGIN', action: false})}></Button>
    </View>
  );
}

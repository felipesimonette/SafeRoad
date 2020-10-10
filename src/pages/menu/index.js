import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';

export default function Menu() {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="SAIR"
        onPress={() => dispatch({type: 'LOGIN', action: false})}></Button>
    </View>
  );
}

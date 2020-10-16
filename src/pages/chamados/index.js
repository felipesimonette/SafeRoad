import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import MapView from 'react-native-maps';
// AIzaSyCFq72H583Y5spfbemzdHauG6HW2R8-eh0
export default function Menu() {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Button
        title="SAIR"
        onPress={() => dispatch({type: 'LOGIN', action: false})}></Button>
    </View>
  );
}

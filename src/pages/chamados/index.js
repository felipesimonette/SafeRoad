import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

export default function Menu() {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0888,
          longitudeDelta: 0.08888,
        }}
      />
    </View>
  );
}

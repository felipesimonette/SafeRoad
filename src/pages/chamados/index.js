import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  View,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import style from './style';

export default function Menu() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [showUnauthorizedModal, setShowUnauthorizedModal] = useState(false);
  const [userPositonAvailiable, setUserPositonAvailiable] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  async function getUserPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasLocationPermission(true);
        setShowUnauthorizedModal(false);
      } else {
        setHasLocationPermission(false);
        setShowUnauthorizedModal(true);
      }
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    getUserPermission();

    // Geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log(position);
    //   },
    //   (error) => {
    //     // See error code charts below.
    //     console.log(error.code, error.message);
    //   },
    //   {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    // );

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          console.log(coords);
          setLatitude(coords.latitude);
          setLongitude(coords.longitude);
          setUserPositonAvailiable(true);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      console.log('sem autorização');
    }
  }, [hasLocationPermission]);

  return (
    <View style={{flex: 1}}>
      {userPositonAvailiable ? (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0888,
            longitudeDelta: 0.08888,
          }}>
          <Marker
            coordinate={{latitude: latitude, longitude: longitude}}></Marker>
        </MapView>
      ) : (
        <View>
          <Text>Sem posição do usuario</Text>
        </View>
      )}
      <Modal
        transparent={true}
        visible={showUnauthorizedModal}
        animationType="none">
        <View style={style.unauthorizedContainer}>
          <Text style={style.unauthorizedText}>
            Sem aplicativo para você amigão!!!
          </Text>
          <Text style={style.unauthorizedText}>Saca da autorização.</Text>
          <TouchableOpacity
            style={{backgroundColor: '#fff', padding: 10}}
            onPress={getUserPermission}>
            <Text>TENTAR NOVAMENTE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

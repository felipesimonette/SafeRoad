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
import Icon from 'react-native-vector-icons/Feather';
//  import {Dropdown} from 'react-native-material-dropdown';

import style from './style';

export default function Menu() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [showUnauthorizedModal, setShowUnauthorizedModal] = useState(false);
  const [userPositonAvailiable, setUserPositonAvailiable] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // let data = [
  //   {
  //     value: 'Banana',
  //   },
  //   {
  //     value: 'Mango',
  //   },
  //   {
  //     value: 'Pear',
  //   },
  // ];

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
        <>
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0888,
              longitudeDelta: 0.08888,
            }}>
            <Marker
              coordinate={{latitude: latitude, longitude: longitude}}
              title="Sua localização"></Marker>
          </MapView>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#dadada',
              right: 10,
              left: 10,
              bottom: 10,
              borderRadius: 5,
              elevation: 5,
            }}>
            {/* <Dropdown label="Favorite Fruit" data={data} /> */}
            <TouchableOpacity
              style={{
                backgroundColor: '#FF8C00',
                alignSelf: 'flex-end',
                borderRadius: 5,
                // elevation: 5,
              }}>
              <Icon name="plus" color="#fff" size={45} />
            </TouchableOpacity>
          </View>
        </>
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

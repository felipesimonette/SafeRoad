import React from 'react';
import {
  View,
  Modal,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import style from './style';

export default function InformationModal(props) {
  return (
    <Modal transparent={true} visible={props.visible} animationType="slide">
      <View style={style.container}>
        {props.type == 'loading' && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#c9c9c9" />
            <Text style={{color: '#c9c9c9'}}>Carregando</Text>
          </View>
        )}

        {props.type == 'error' && (
          <View style={style.errorContainer}>
            <View style={style.errorHeader}>
              <Icon name="closecircleo" color="#fff" size={55} />
            </View>
            <View style={style.errorBody}>
              <Text style={{color: '#696969', fontSize: 17}}>
                {props?.errorText}
              </Text>
              <TouchableOpacity
                style={style.errorButton}
                onPress={() => props.setVisible(false)}>
                <Text style={{color: '#fff'}}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}

import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function NovoChamado({showNovoChamado, setShowNovoChamado}) {
  const {width} = Dimensions.get('screen');
  const [optionSelected, setOptionSelected] = useState(null);
  const [inputOutros, setInputOutros] = useState('');
  
  const itemsDropDownPicker = [
    // {label: 'Selecione uma opção...', value: 0, hidden: true},
    {label: 'Meu carro quebrou', value: 1},
    {label: 'Estou sem gasolina', value: 2},
    {label: 'Acidente na pista', value: 3},
    {label: 'Objetos na pista', value: 4},
    {label: 'Animais na pista', value: 5},
    {label: 'Outros...', value: 6},
  ];

  return (
    <Modal
      transparent={true}
      visible={showNovoChamado}
      onRequestClose={() => setShowNovoChamado(false)}
      animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <TouchableOpacity
          onPress={() => setShowNovoChamado(false)}
          style={StyleSheet.absoluteFillObject}
        />
        <View
          style={{
            backgroundColor: '#f0f0f0',
            width: width * 0.9,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#dadada',
            zIndex: 10,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 10,
                fontSize: 30,
                color: '#FF8C00',
              }}>
              Novo Chamado
            </Text>
            <View
              style={{
                borderWidth: 0,
                flex: 1,
                padding: 20,
              }}>
              <DropDownPicker
                placeholder="Selecione uma opção..."
                items={itemsDropDownPicker}
                containerStyle={{height: 50}}
                selectedLabelStyle={{fontSize: 15}}
                dropDownStyle={{elevation: 5}}
                style={{elevation: 5}}
                defaultValue={optionSelected}
                onChangeItem={(items) => setOptionSelected(items.value)}
              />
              {optionSelected == 6 ? (
                <TextInput
                  onChangeText={setInputOutros}
                  style={{
                    backgroundColor: '#fff',
                    marginTop: 20,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#dadada',
                    height: 50,
                    elevation: 5,
                  }}
                  placeholder="Digite oque aconteceu..."
                />
              ) : (
                <View style={{height: 50, marginTop: 20}}></View>
              )}
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  alignSelf: 'center',
                  backgroundColor: '#fff',
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#dadada',
                  elevation: 5,
                }}>
                <Text>ENVIAR</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

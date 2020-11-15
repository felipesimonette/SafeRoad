import React, {useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Modalize} from 'react-native-modalize';

export default function MeusChamados() {
  const modalizeRef = useRef(null);
  const {height} = Dimensions.get('screen');

  const handleOpenModal = () => {
    modalizeRef.current?.open();
  };

  const meusChamadosDados = [
    {
      numero: '17485',
      Status: 'Encerrado',
      Tipo: 'Objetos na pista',
      Data: '13/11/1958',
      Hora: '10:29',
      Relatorio: 'Foi encontrando um objeto alienigena na pista as 18:01',
    },
    {
      numero: '17946',
      Status: 'Encerrado',
      Tipo: 'Sem gasolina',
      Data: '03/02/2021',
      Hora: '19:01',
      Relatorio: 'Carro sem gasolina rebocado as 02:25',
    },
    {
      numero: '21811',
      Status: 'Encerrado',
      Tipo: 'Outros',
      Data: '16/12/2069',
      Hora: '16:09',
      Relatorio: 'gG Ximigão',
    },
    {
      numero: '11811',
      Status: 'Encerrado',
      Tipo: 'Outros',
      Data: '16/12/2019',
      Hora: '12:00',
      Relatorio: 'Teste',
    },
  ];
  
  return (
    <View style={{flex: 1, backgroundColor: '#FF8C00'}}>
      <StatusBar backgroundColor="#FF8C00" barStyle="light-content" />
      <FlatList
        data={meusChamadosDados}
        ListHeaderComponent={() => (
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, marginTop: 10, color: '#fff'}}>
              Chamados enviados: {meusChamadosDados.length}
            </Text>
          </View>
        )}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleOpenModal}
            style={{
              marginHorizontal: 20,
              marginTop: 20,
              backgroundColor: '#505050',
              borderRadius: 5,
              padding: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 15,
                marginBottom: 5,
              }}>
              Chamado: {item.numero}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{justifyContent: 'space-between'}}>
                <Text style={{color: '#fff', fontSize: 15}}>
                  Tipo: {item.Tipo}
                </Text>
                <Text style={{color: '#fff', fontSize: 15, marginTop: 5}}>
                  Data: {item.Data}
                </Text>
                <Text style={{color: '#fff', fontSize: 15, marginTop: 5}}>
                  Hora: {item.Hora}
                </Text>
              </View>
              <View style={{paddingLeft: 10, alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 15}}>Status</Text>
                <Text style={{color: '#fff', fontSize: 15, marginBottom: 10}}>
                  {item.Status}
                </Text>
                <Icon
                  name="information-circle-outline"
                  color="#fff"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={() => <View style={{height: 15}} />}
        ListEmptyComponent={() => (
          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              color: '#fff',
              textAlign: 'center',
            }}>
            Nenhum Chamado Encontrado
          </Text>
        )}
        keyExtractor={(item) => item.numero}
      />

      <Modalize
        ref={modalizeRef}
        modalHeight={height * 0.4}
        snapPoint={height * 0.4}
        // modalStyle={{backgroundColor: '#f0f0f0'}}
        handlePosition="inside">
        <View style={{padding: 20}}>
          <Text style={{textAlign: "center", fontSize: 15}}>Chamados Detalhes</Text>
        </View>
      </Modalize>
    </View>
  );
}

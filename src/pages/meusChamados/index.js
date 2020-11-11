import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';

export default function MeusChamados() {
  const meusChamadosDados = [
    {
      numero: 17485,
      Status: 'Encerrado',
      Tipo: 'Objetos na pista',
      Data: '13/11/1958 - 10:29',
      Relatorio: 'Foi encontrando um objeto alienigena na pista as 18:01',
    },    

    {
      numero: 17946,
      Status: 'Encerrado',
      Tipo: 'Sem gasolina',
      Data: '03/02/2021 - 19:01',
      Relatorio: 'Carro sem gasolina rebocado as 02:25',
    }, 

    {
      numero: 21811,
      Status: 'Encerrado',
      Tipo: 'Outros',
      Data: '16/12/2069 - 16:09',
      Relatorio: 'gG Ximigão',
    }, 
  ];
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#FF8C00'}}>
      <StatusBar backgroundColor="black"></StatusBar>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25, marginTop: 30}}>Meus chamados</Text>
        <Text style={{fontSize: 20, marginTop: 10}}>Chamados enviados: 15</Text>
      </View>

      {meusChamadosDados.map((Element) => (
        <View
          style={{
            borderWidth: 1,
            marginHorizontal: 20,
            marginTop: 50,
            backgroundColor: '#DADADA',
            borderRadius: 5,
            padding: 10,
          }}>
          <Text style={{fontSize: 18}}>Número do chamado: {Element.numero}</Text>
          <Text style={{fontSize: 18}}>Status: {Element.Status}</Text>
          <Text style={{fontSize: 18}}>Tipo: {Element.Tipo}</Text>
          <Text style={{fontSize: 18}}>Data: {Element.Data}</Text>
          <Text style={{fontSize: 18}}></Text>
          <Text style={{fontSize: 18}}>Relatório:</Text>
          <Text style={{fontSize: 18}}>{Element.Relatorio}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

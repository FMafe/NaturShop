import React from 'react';
import {StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';

import Carrossel from '../components/Carrossel';






export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.cabecalho}>
          <Image
            source={require('../../src/img/Logo.png')}
            style={{ width: 70, height: 70 }}></Image>
          <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>NaturShop - Sua Feira no Celular</Text>
        </View>
        <View style={{marginTop: '30%'}}>
          <Text style={{margin: 10 , fontSize: 20, color: '#000', fontWeight: 'bold' }}>Promoções do Dia!</Text>
          <Carrossel />
        </View>
       
     
        
        
       
      


      </View>

    </ScrollView >
  );
}

const styles = StyleSheet.create({
  cabecalho:{
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  
  
 
})
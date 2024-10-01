import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';


export default function Card({ item }) {

  const navigation = useNavigation();

  return (

    <TouchableOpacity style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { item })}
    >
    
        <View style={styles.cardSuperior}>
          <Image
            style={styles.cardImg}
            source={{ uri: item.imagem }}
          />
          <Text style={styles.titulo}>{item.nome}</Text>
        </View>
        <View style={styles.cardInferior}>
            
            <Text style={styles.preco}>R$ {item.preco} o Kg</Text>
            <Text style={styles.precoPromocao}>R$ {item.precoPromocao} o Kg</Text>
        </View>
      
    </TouchableOpacity>


  );
}

const styles = StyleSheet.create({
  card: {
   
    width: '94%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin:15,
   
    
  },

  cardSuperior: {
    alignItems: 'center',
    padding: 15,
  },
  cardInferior: {
    
    alignItems: 'center',
    margin: 5,
    padding: '35px 25px' ,
    height: '0px',
    flexShrink: 0,
    strokewidth: '0.9px', 
  },
  cardImg: {
    marginBottom: 6,
    height: 190,
    width: '70%',
    borderRadius: 10,
  },
  titulo: {
    color: '#274C5B',
    fontSize: 18,
    marginBottom: 4,
    
  },
  preco: {
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    
  },
  precoPromocao: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  }
})
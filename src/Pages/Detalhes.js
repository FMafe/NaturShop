import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Detalhes({ navigation, route }) {

  const item = route?.params.item;

 

  return (
    <View style={styles.container}>

      <Image
        resizeMode='cover'
        style={styles.img}
        source={{ uri: item.imagem }}
      />

      <Text style={styles.titulo}>{item.nome}</Text>
      <Text style={styles.detalhes} >
        {item.descricao}
      </Text>
      <Text style={styles.preco}>
        R$ {item.preco}
      </Text>
      <Text style={styles.precoPromocao}>
        R$ {item.precoPromocao}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.botao}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: '#fff',
  },
  img: {
    height: 400,
    marginBottom: 15
  },
  titulo: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 15
  },
  detalhes: {
    color: '#aaa',
    fontSize: 18,
    marginBottom: 15
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
  },
  botao: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  textoBotao: {
    color: '#fff',
    fontSize: 20
  }


})
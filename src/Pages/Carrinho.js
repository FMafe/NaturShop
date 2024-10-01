import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';

export default function Carrinho() {
  return (
    <ScrollView>
      <Text>Carrinho</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 220,
    flexDirection: 'column', // Para alinhar as imagens na horizontal
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  cartao: {
    width: '90%', 
    height: 200, 
    margin: 20, 
  },
});
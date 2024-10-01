import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';

export default function SobreNos() {
  return (
    <ScrollView>
      <Text style={{margin: 100 ,alignItems: 'center', fontSize: 20, color: '#000', fontWeight: 'bold' }}>Sobre Nós</Text>
      <Text style={styles.container}>Lorem ipsum dolor sit amet, consectetur adipisci elit, 
        sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
        Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint obcaecat cupiditat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    
    container: {
    margin: 20 ,
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
 
});
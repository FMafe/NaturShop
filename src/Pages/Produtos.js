import { StyleSheet, FlatList, ScrollView, Text, View, Image } from 'react-native';
import Card from '../components/Card';
import alimento from '../Data/alimento';

export default function Produtos() {
  return (
    <ScrollView>
      <View>
            <View style={{ backgroundColor: 'lightgreen' }}>
                <Text style={{ textAlign: 'center', fontSize: 25,fontWeight: 'bold' , color: '#000', margin:10 }}>Alimentos</Text>

                <FlatList
                vertical
                showsHorizontalScrollIndicator={false}
                data={alimento}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                    <Card item={item} />
                    );
                }}
                />
            </View>
     </View>         
         
        
    </ScrollView>
  );
}

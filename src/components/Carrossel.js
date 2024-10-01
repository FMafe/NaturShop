import React from "react";

import { StyleSheet,FlatList, Image, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from '../components/Card';
import alimentoProm from '../Data/alimentoProm';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;





export const Carrossel= () => {
    
        return (
          
        <View style={styles.wrapper}>
          <Carousel

               data={alimentoProm}
                renderItem={({ item }) => <Card item={item} />}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                userScrollView={true}
                loop={true}
            
            
          />
        </View> 
        );
    };


  
  const styles = StyleSheet.create({
    wrapper: {
        alignContent: 'center',
        backgroundColor: 'lightgreen',
        height: 350,
    }
  })
    
  
  
  export default Carrossel;
  
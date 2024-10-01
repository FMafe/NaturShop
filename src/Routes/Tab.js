import React from 'react';

{/*Telas */ }
import Home from '../Pages/Home';
import Carrinho from '../Pages/Carrinho';
import Produtos from '../Pages/Produtos';
import SobreNos from '../Pages/SobreNos';


{/*Icones*/ }

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#010101',
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0
        }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="navicon" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="cart" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Sobre nós'
        component={SobreNos}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="campaign" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
import React from 'react';

{/*Telas */ }

import Detalhes from '../Pages/Detalhes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './Tab';

const Stack = createNativeStackNavigator();


function Routes() {
  return (

    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
};


export default Routes;
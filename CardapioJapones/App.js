import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Inicio from './componentes/inicio';
import Categoria from './componentes/categoria';
import options from './utils/screenOptions';

const Aba = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator screenOptions={options}>
        <Aba.Screen name="Início" component={Inicio} />
        <Aba.Screen name="Roll" component={Categoria} initialParams={{categoria: "roll"}} />
        <Aba.Screen name="Sushi" component={Categoria} initialParams={{categoria: "sushi"}} />
        <Aba.Screen name="Yakitori" component={Categoria} initialParams={{categoria: "yakitori"}} />
        <Aba.Screen name="Yakisoba" component={Categoria} initialParams={{categoria: "yakisoba"}} />
        <Aba.Screen name="Sashimi" component={Categoria} initialParams={{categoria: "sashimi"}} />
        <Aba.Screen name="Temaki" component={Categoria} initialParams={{categoria: "temaki"}} />
        <Aba.Screen name="Cogumelos" component={Categoria} initialParams={{categoria: "cogumelos"}} />
        <Aba.Screen name="Gyoza" component={Categoria} initialParams={{categoria: "gyoza"}} />
        <Aba.Screen name="Tempura" component={Categoria} initialParams={{categoria: "tempura"}} />
      </Aba.Navigator>
    </NavigationContainer>
  );
}
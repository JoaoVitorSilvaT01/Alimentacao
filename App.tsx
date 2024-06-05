import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './src/screens/Inicio';
import Questoes from './src/screens/Questoes';
import Resultado from './src/screens/Resultado';
import QuestoesProvider from './src/context/QuestoesContext';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <QuestoesProvider>
        <Stack.Navigator>
          <Stack.Screen name='Iniciar' component={Inicio} />
          <Stack.Screen name="Questões" component={Questoes} />
          <Stack.Screen name="Resultado" component={Resultado} />
        </Stack.Navigator>
      </QuestoesProvider>
    </NavigationContainer>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

export default function Inicio(props) {
  return (
    <View>
      <Text>Bem vindo! Programa alimentação saudável</Text>
      <Button
        title="Iniciar"
        onPress={() => props.navigation.navigate("Questões")}
      />
    </View>
  )
}
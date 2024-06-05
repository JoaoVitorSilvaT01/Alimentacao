import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { QuestoesContext } from '../context/QuestoesContext'

export default function Resultado() {

  const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10} = useContext(QuestoesContext);
  const [resultado, setResultado] = useState("");
  const [resp, setResp] = useState(-1);

  function contarQuestoes() {
    let resp = q1 + q2 + q3 + q4 + q5 +q6 + q7+ q8 + q9 + q10;
    setResp(resp);
    if (resp < 11) {
      setResultado("Reflita seus hábitos alimentares.")
    }
    else if (resp < 21 && resp > 10) {
      setResultado("Sua alimentação está boa.")
    }
    else if (resp < 31 && resp > 20) {
      setResultado("Parabéns, alimentação excelente.")
    }
  }

  useEffect( () => {
    contarQuestoes();
    // gravarQuestoes();
  }, [])


  return (
    <View>
      <Text>Resultado: {resp} {resultado}</Text>
    </View>
  )
}
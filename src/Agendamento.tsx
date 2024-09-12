import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, useToast, VStack, Text, Switch } from "native-base";
import React, { useState } from "react";
import { agendarConsulta } from "./servicos/ConsultaServico";
import Botao from "./components/Button";
import { converterStringParaData } from "./utils/Conversoes";

export default function Agendamento({ route, navigation }: any) {
  const [data, setData] = useState('')
  const [desejaLembrete, setDesejaLembrete] = useState(false)
  const [lembrete, setLembrete] = useState([[]])
  const toast = useToast()

  async function agendar() {
    const pacienteId = await AsyncStorage.getItem('pacienteId')
    const { especialistaId } = route.params

    if (!pacienteId || !especialistaId || !data) return

    const dataFormatada = converterStringParaData(data)

    const resultado = await agendarConsulta(especialistaId, pacienteId, dataFormatada, desejaLembrete, lembrete)

    if (resultado) {
      toast.show({
        title: 'Consulta agendada com sucesso',
        backgroundColor: 'green.500',
      })
      return navigation.goBack()
    }
    toast.show({
      title: 'Erro ao agendar consulta',
      description: 'Horário indisponível',
      backgroundColor: 'red.500',
    })
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
      <Input
        placeholder="Digite a data"
        onChangeText={setData}
      />

      <VStack mt={4} space={2} alignItems="center">
        <Text>Deseja lembrete</Text>
        <Switch isChecked={desejaLembrete} onToggle={() => setDesejaLembrete(!desejaLembrete)} />
      </VStack>

      <Botao onPress={agendar}>
        Agendar
      </Botao>
    </VStack>
  )
}
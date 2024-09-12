import { Divider, ScrollView, useToast, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CardConsulta } from "../components/CardConsulta";
import Title from "../components/Title";
import Botao from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PegarConsultasPaciente } from "../servicos/PacienteServico";
import React from "react";
import { cancelarConsulta } from "../servicos/ConsultaServico";
import { useIsFocused } from "@react-navigation/native";
import { converterDataParaString, converterStringParaData } from "../utils/Conversoes";

interface EspecialistaProps {
    id: string,
    nome: string,
    imagem: string,
    especialidade: string
}

interface ConsultasProps {
    id: string,
    data: string,
    especialista: EspecialistaProps,
}

export default function Consultas(){
    const [consultasProximas, setConsultasProximas] = useState<ConsultasProps[]>([]);
    const [consultasPassadas, setConsultasPassadas] = useState<ConsultasProps[]>([]);
    const [recarregar, setRecarregar] = useState(false);
    const isFocused = useIsFocused();
    const toast = useToast();

    useEffect(() => {
        async function pegarConsultas() {
            const pacienteId = await AsyncStorage.getItem('pacienteId')
            if(!pacienteId) return

            const todasConsultas: ConsultasProps[] = await PegarConsultasPaciente(pacienteId)
            const agora = new Date()

            const proximas = todasConsultas.filter((consulta) => new Date(consulta.data) > agora)
            const passadas = todasConsultas.filter((consulta) => new Date(consulta.data) <= agora)


            setConsultasProximas(proximas)
            setConsultasPassadas(passadas)
        }
        pegarConsultas()
    },[isFocused, recarregar])

    async function cancelar(consultaId: string) {
        const resultado = await cancelarConsulta(consultaId)
        if (resultado) {
            toast.show({
                title: 'Consulta cancelada com sucesso',
                backgroundColor: 'green.500'
            });
            setRecarregar(!recarregar)
        } else {
            toast.show({
                title: 'Erro ao cancelar sua consulta',
                backgroundColor: 'red.500'
            })
        }
    }
    
    return(
        <ScrollView>
            <VStack padding={5}>  
                <Title color="blue.500">Minhas consultas</Title>

                <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

                <Title fontSize="lg" alignSelf="flex-start" mb={2} color="blue.500">Próximas consultas</Title>

                {consultasProximas?.map((consulta) => (
                    <CardConsulta 
                    key={consulta?.id}
                    nome={consulta?.especialista?.nome} 
                    especialidade={consulta?.especialista?.especialidade} 
                    data={converterDataParaString(consulta?.data)}  
                    foto={consulta?.especialista?.imagem}  
                    foiAgendado
                    onPress={() => cancelar(consulta.id)}
                    />
                ))}
                

                <Divider marginTop={5} />

                <Title color="blue.500" alignSelf="flex-start" mb={2} fontSize="lg">Consultas passadas</Title>
                {consultasPassadas?.map((consulta) => (
                    <CardConsulta 
                    key={consulta.id}
                    nome={consulta?.especialista?.nome}
                    especialidade={consulta?.especialista?.especialidade}
                    data={consulta?.data}
                    foto={consulta?.especialista?.imagem}
                    foiAtendido
                    />
                ))}
            </VStack>
        </ScrollView>
    )
}
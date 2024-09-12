import { Box, ScrollView, Text, VStack } from "native-base";
import React, { useState } from "react";
import EntradaText from "../components/Input";
import Botao from "../components/Button";
import Title from "../components/Title";
import { CardConsulta } from "../components/CardConsulta";
import api from "../servicos/api";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";
import { NavigationProps } from "../@types/navigation";

interface EspecialistaProps{
    nome: string,
    imagem: string,
    especialidade: string,
    id: string,
}

export default function Explorar({navigation} : NavigationProps<'Explorar'>){
    const [estado, setEstado] = useState('')
    const [especialidade, setEspecialidade] = useState('')
    const [resultadoBusca, setResultadoBusca] = useState([])


    async function buscar() {
        if (!estado || !especialidade) return null
        const resultado = await buscarEspecialistaPorEstado(estado, especialidade)
        if (resultado) {
            setResultadoBusca(resultado)
            console.log(resultado)
        }
    }
    return(
        <ScrollView flex={1} bgColor='white'>
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>

                <Box width="100%" padding={3} borderRadius="lg" backgroundColor="#FFFFFF" shadow="1" marginTop={10} borderRightRadius="md">
                    <EntradaText placeholder="Digite a especialidade" value={especialidade} onChangeText={setEspecialidade}/>
                    <EntradaText placeholder="Digite sua localização" value={estado} onChangeText={setEstado}/>
                    <Botao mt={3} marginBottom={3} onPress={buscar}>Buscar</Botao>
                </Box>
                <Title alignSelf="center" color="blue.500">Resultado da busca</Title>
                {resultadoBusca?.map((especialista: EspecialistaProps,index) => (
                    <VStack flex={1} width="100%" alignItems="flex-start" bgColor="white" key={index}>
                        <CardConsulta nome={especialista.nome} especialidade={especialista.especialidade} foto={especialista.imagem} onPress={() => navigation.navigate('Agendamento', {
                            especialistaId: especialista.id
                        })}/>
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}
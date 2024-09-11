import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from "../interface/Paciente";
import Botao from "../components/Button";


export default function Perfil({navigation} : any){
    const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

    useEffect(()=> {
        async function dadosPaciente() {
            const pacienteId = await AsyncStorage.getItem('pacienteId')
            if(!pacienteId) return null

            const resultado = await PegarDadosPaciente(pacienteId)
            if(resultado){
                setDadosPaciente(resultado)
                // console.log(resultado)
            }
        }
        dadosPaciente()
    },[])

    function deslogar(){
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('pacienteId')
        navigation.replace('Login')
    }
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' padding={5}>
                <Title color="blue.500">Meu Perfil</Title>

                <Avatar size="xl" source={{uri: "https://github.com/vinicioslucas.png"}} marginTop={5} />

                <Title color="blue.500">Informações pessoais</Title>
                <Title fontSize="lg" marginBottom={1} fontWeight="bold">{dadosPaciente?.nome}</Title>
                <Text>{dadosPaciente?.email}</Text>
                <Text>{dadosPaciente?.endereco?.estado}</Text>

                <Divider  marginTop={5}/>

                <Title color="blue.500" marginBottom={1}>Planos de Saúde</Title>
                {
                    dadosPaciente?.planosSaude?.map((plano, index) => (
                        <Text key={index}>{plano}</Text>
                    ))
                }
                <Botao onPress={deslogar}>Deslogar</Botao>
            </VStack>
        </ScrollView>
    )
}
import { Box, ScrollView, Text, VStack } from "native-base";
import React from "react";
import EntradaText from "../components/Input";
import Botao from "../components/Button";
import Title from "../components/Title";
import { CardConsulta } from "../components/CardConsulta";

export default function Explorar(){
    return(
        <ScrollView flex={1} bgColor='white'>
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>

                <Box width="100%" padding={3} borderRadius="lg" backgroundColor="#FFFFFF" shadow="1" marginTop={10} borderRightRadius="md">
                    <EntradaText placeholder="Digite a especialidade" />
                    <EntradaText placeholder="Digite sua localização"/>
                    <Botao mt={3} marginBottom={3}>Buscar</Botao>
                </Box>
                <Title alignSelf="center" color="blue.500">Resultado da busca</Title>
                {[1,2,3].map((_,index) => (
                    <VStack flex={1} width="100%" alignItems="flex-start" bgColor="white" key={index}>
                        <CardConsulta nome="Galego" especialidade="Cardiologista"/>
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}
import { Box, Divider, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Logo from '../assets/Logo.png'
import Title from "../components/Title";
import EntradaText from "../components/Input";
import Botao from "../components/Button";
import depoimentos from "../utils/mock";

export default function Home(){
    return(
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
                <Image source={Logo} alt="Logo voll" marginTop={10}/>
                <Title color="blue.500">Boas-vindas!</Title>

                <Box width="100%" padding={3} borderRadius="lg" backgroundColor="#FFFFFF" shadow="1" marginTop={10} borderRightRadius="md">
                <EntradaText placeholder="Digite a especialidade"/>
                <EntradaText placeholder="Digite sua localização"/>
                <Botao marginTop={3} marginBottom={3}>Buscar</Botao>
                </Box>

                <Title color="blue.800" alignSelf="center">Depoimentos</Title>
                <VStack space={3} divider={<Divider />} width="100%">
                    {
                        depoimentos.map(depoimento => (
                            <Box key={depoimento.id} w="100%" borderRadius="lg" p={3}>
                                <Text color="gray.300" fontSize="md" textAlign="justify">
                                    {depoimento.text}
                                </Text>
                                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">
                                    {depoimento.titulo}
                                </Text>
                            </Box>
                        ))
                    }
                </VStack>
            </VStack>
        </ScrollView>

    )
}
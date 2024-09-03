import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";
import React from "react";
import Title from "../components/Title";


export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' padding={5}>
                <Title color="blue.500">Meu Perfil</Title>

                <Avatar size="xl" source={{uri: "https://github.com/vinicioslucas.png"}} marginTop={5} />

                <Title color="blue.500">Informações pessoais</Title>
                <Title fontSize="lg" marginBottom={1} fontWeight="bold">Lucas Vinícios</Title>
                <Text>20/06/1998</Text>
                <Text>Imperatriz-MA</Text>

                <Divider  marginTop={5}/>

                <Title color="blue.500" marginBottom={1}>Histórico médico</Title>
                <Text>Asma</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}
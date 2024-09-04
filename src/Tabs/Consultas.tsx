import { Divider, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { CardConsulta } from "../components/CardConsulta";
import Title from "../components/Title";
import Botao from "../components/Button";

export default function Consultas(){
    return(
        <ScrollView>
            <VStack padding={5}>  
                <Title color="blue.500">Minhas consultas</Title>

                <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

                <Title fontSize="lg" alignSelf="flex-start" mb={2} color="blue.500">Próximas consultas</Title>

                <CardConsulta nome="Dr. Arthur Galego" especialidade="Ginecologista" data="05/09/2024" foiAgendado  />

                <Divider marginTop={5} />

                <Title color="blue.500" alignSelf="flex-start" mb={2} fontSize="lg">Consultas passadas</Title>
                <CardConsulta nome="Dr. Diego Balada" especialidade="Fisioterapeuta" data="06/09/2024" foiAtendido />
                <CardConsulta nome="Dr. Buiu do Pix" especialidade="Fisioterapeuta" data="06/09/2024" foiAtendido />
                <CardConsulta nome="Dr. Kael da bené" especialidade="Fisioterapeuta" data="06/09/2024" foiAtendido />
            </VStack>
        </ScrollView>
    )
}
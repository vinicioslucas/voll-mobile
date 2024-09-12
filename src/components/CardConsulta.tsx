import { Text, Avatar, VStack} from 'native-base';
import React from 'react';
import galego from '../assets/galego.png'
import Botao from './Button';

interface CardProps{
    nome: string,
    foto?: string,
    especialidade: string,
    data?: string,
    foiAtendido?: boolean,
    foiAgendado?: boolean,
    onPress?: () => void,
}

export function CardConsulta({
    nome,
    foto,
    especialidade,
    data,
    foiAgendado,
    foiAtendido,
    onPress
}: CardProps){
    return(
        <VStack marginBottom={5} width="100%" backgroundColor={foiAtendido ? 'blue.100' : 'white' } p="5" borderRadius="lg" shadow="2">
            <VStack flexDirection="row" >
                <Avatar size="xl" source={{uri: foto}}/>

                <VStack paddingLeft="4">
                    <Text fontSize="md" fontWeight="bold">{nome}</Text>
                    <Text color="gray.300">{especialidade}</Text>
                    <Text color="gray.300">{data}</Text>
                </VStack>
            </VStack>
            

            <Botao mt={4} onPress={onPress}>
                {
                    foiAgendado ? 'Cancelar ' : 'Agendar consulta'
                }
            </Botao>
        </VStack>
    )
}
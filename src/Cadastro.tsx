import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, ScrollView} from 'native-base';
import Logo from './assets/Logo.png'
import Title from './components/Title';
import Botao from './components/Button';
import EntradaText from './components/Input';
import React, { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';


export default function Cadastro(){
    const [numSecao, setNumSecao] = useState(0);

    function avancarSecao(){
        if (numSecao < secoes.length - 1) {
            setNumSecao(numSecao + 1)
        }
    }
    function voltarSecao(){
        if (numSecao > 0) {
            setNumSecao(numSecao - 1)
        }
    }

    return(
        <ScrollView flex={1}  padding={5}>
            <Image  source={Logo} alt='Logo Voll' alignSelf="center"/>

            <Title>
                {secoes[numSecao].titulo}
            </Title>

            <Box>
                {
                    secoes[numSecao]?.entradaTexto?.map(entrada => {
                        return <EntradaText label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
                    })
                }
            </Box>

            <Box>
                <Text color="blue.800" fontWeight="bold" fontSize="md" marginTop="2" marginBottom={2}>
                    Selecione os planos:
                </Text>
                {
                    secoes[numSecao].checkbox.map(checkbox => 
                    {
                        return <Checkbox key={checkbox.id} value={checkbox.value}>
                            {checkbox.value}
                        </Checkbox>
                    })
                }
            </Box>

            {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>
                Voltar
            </Botao>}

            <Botao onPress={() => avancarSecao()} mt={4} mb={20}>
                Avançar
            </Botao>
        </ScrollView>
    );
}

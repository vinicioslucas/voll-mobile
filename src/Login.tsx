import { VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import Title from './components/Title';
import Botao from './components/Button';
import EntradaText from './components/Input';
import React from 'react';

export default function Login(){
    return(
        <VStack flex={1} alignItems="center" padding={5} justifyContent="center">
            <Image  source={Logo} alt='Logo Voll'/>

            <Title>
                Faça login em sua conta
            </Title>
            
            <Box>
                <EntradaText 
                label='Email'
                placeholder='Insira seu email'
                />

                <EntradaText 
                label='Senha'
                placeholder='Insira sua senha'
                />
            </Box>

            <Botao>
                Entrar
            </Botao>

            <Link href='https://www.google.com' marginTop={2}>
                Esqueceu sua senha?
            </Link>

            <Box width="100%" flexDirection="row" justifyContent="center" marginTop={8}>
                <Text>Ainda não tem cadastro? </Text>

                <TouchableOpacity>
                    <Text color="blue.500">
                        Faça seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}

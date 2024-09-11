import { VStack, Image, Text, Box, FormControl, Input, Button, Link, useToast} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import Title from './components/Title';
import Botao from './components/Button';
import EntradaText from './components/Input';
import React, { useEffect, useState } from 'react';
import Cadastro from './Cadastro';
import { fazerLogin } from './servicos/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';


export default function Login({ navigation } : any ){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(true);
    const toast = useToast();
    
    useEffect(() => {
        // AsyncStorage.removeItem('token')
        async function verificarLogin() {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                navigation.replace('Tabs')
            }
            setCarregando(false)
        }
        verificarLogin()
    }, [])

    async function login() {
        const resultado = await fazerLogin(email, senha)
        if(resultado){
            const { token } = resultado
            AsyncStorage.setItem('token', token)

            const tokeDecodificado = jwtDecode(token) as any
            const pacienteId = tokeDecodificado.id
            AsyncStorage.setItem('pacienteId', pacienteId)

            navigation.replace('Tabs')
        }else{
            toast.show({
                title: 'Erro no login',
                description: 'O email ou senha não conferem',
                backgroundColor: "red.500"
            })
        }
    }

    if (carregando) {
        null
    }

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
                value={email}
                onChangeText={setEmail}
                />

                <EntradaText 
                label='Senha'
                placeholder='Insira sua senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                />
            </Box>

            <Botao onPress={login}>
                Entrar
            </Botao>

            <Link href='https://www.google.com' marginTop={2}>
                Esqueceu sua senha?
            </Link>

            <Box width="100%" flexDirection="row" justifyContent="center" marginTop={8}>
                <Text>Ainda não tem cadastro? </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color="blue.500">
                        Faça seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}

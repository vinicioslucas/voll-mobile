import {Image, Text, Box, Checkbox, ScrollView, useToast} from 'native-base';
import Logo from './assets/Logo.png'
import Title from './components/Title';
import Botao from './components/Button';
import EntradaText from './components/Input';
import React, { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';
import {cadastrarPaciente} from './servicos/PacienteServico';


export default function Cadastro({navigation}: any){
    const [numSecao, setNumSecao] = useState(0);
    const [dados, setDados] = useState({} as any);
    const [planos, setPlanos] = useState([] as number[]);
    const toast = useToast();

    function avancarSecao(){
        if (numSecao < secoes.length - 1) {
            setNumSecao(numSecao + 1)
        }else{
            console.log(dados)
            console.log(planos)
            cadastrar()
        }
    }

    function voltarSecao(){
        if (numSecao > 0) {
            setNumSecao(numSecao - 1)
        }
    }

    function atualizarDados(id: string, valor: string){
        setDados({...dados, [id]: valor}) // Copiando tudo que tem em dados e armazenando novo valor
    }

    async function cadastrar() {
        const resultado = await cadastrarPaciente({
            cpf: dados.cpf,
            nome: dados.nome,
            email: dados.email,
            endereco:{
                cep: dados.cep,
                rua: dados.rua,
                numero: dados.numero,
                complemento: dados.complemento,
                estado: dados.estado,
            },
            senha: dados.senha,
            telefone: dados.telefone,
            possuiPlanoSaude: planos.length > 0,
            planosSaude: planos,
            imagem: dados.imagem
        })

        if (resultado) {
            toast.show({
            title: 'Cadastro realizado com sucesso',
            description:'Você já pode realizar o login',
            backgroundColor: "green.500"
        })
        navigation.replace('Login')
    } else {
        toast.show({
            title: 'Erro ao cadastras',
            description: 'Verifique os dados e tente novamente',
            backgroundColor: 'red.500'
        })
        navigation.replace('Cadastro')
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
                        return (
                        <EntradaText 
                        label={entrada.label} 
                        placeholder={entrada.placeholder} 
                        key={entrada.id}
                        secureTextEntry={entrada.secureTextEntry}
                        value={dados[entrada.name]}
                        onChangeText={(text) => atualizarDados(entrada.name, text)}
                        />)
                    })
                }
            </Box>

            <Box>
                {numSecao == 2 && <Text color="blue.800" fontWeight="bold" fontSize="md" marginTop="2" marginBottom={2}>
                    Selecione os planos:
                </Text>}
                {
                    secoes[numSecao].checkbox.map(checkbox => 
                    {
                        return (
                        <Checkbox 
                        key={checkbox.id} 
                        value={checkbox.value}
                        onChange={() => {
                            setPlanos((planosAnteriores) => {
                                if (planosAnteriores.includes(checkbox.id)){
                                    return planosAnteriores.filter((id) => id !== checkbox.id)
                                }
                                return[...planosAnteriores, checkbox.id]
                            })
                        }}
                        isChecked={planos.includes(checkbox.id)}
                        >
                            {checkbox.value}
                        </Checkbox>)
                    })
                }
            </Box>

            {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='gray.400'>
                Voltar
            </Botao>}

            <Botao onPress={() => avancarSecao()} mt={4} mb={20}>
                {numSecao ==2? 'Finzalizar' : 'Avançar'}
            </Botao>
        </ScrollView>
    );
}


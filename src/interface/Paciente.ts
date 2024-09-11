export interface Paciente{
    cpf: string,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    possuiPlanoSaude: boolean,
    planosSaude?: number[],
    imagem?: string,
    endereco: Endereco
}

export interface Endereco{
    cep: string,
    rua: string,
    numero: number,
    complemento?: string,
    estado: string,
}
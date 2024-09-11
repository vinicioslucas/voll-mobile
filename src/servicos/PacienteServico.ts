import api from "./api";
import { Paciente } from "../interface/Paciente"

export async function cadastrarPaciente(paciente: Paciente){
    if(!paciente) return null

    try {
        const resultado = await api.post('/paciente', paciente)
        console.log(resultado.data)
        return resultado.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function PegarDadosPaciente(id: string) {
    try {
        const resultado = await api.get(`/paciente/${id}`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return null
    }
}

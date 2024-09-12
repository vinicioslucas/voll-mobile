// import api from "./api"


// export async function agendarConsulta(especialistaId: string, pacienteId: string, data: Date, desejaLembrete: boolean, lembrete: any[]) {
//     try {

//         const resultado = await api.post('/consulta' , {
//             params: {
//                 especialista: especialistaId,
//                 paciente: pacienteId,
//                 data: data,
//                 desejaLembrete: desejaLembrete,
//                 lembrete: lembrete
//             }
//         })
//         return resultado.data
//     } catch (error) {
//         if(error.response){
//             console.log(error.response.data)
//         }else{
//              console.log(error)
//         }
//         return null;
//     }
// }

import api from "./api";

export async function agendarConsulta(
  especialistaId: string,
  pacienteId: string,
  data: Date,
  desejaLembrete: boolean,
  lembrete: any[]
) {
  try {
    // Converte a data para string ISO
    const dataFormatada = data.toISOString();

    // Envia os dados no corpo da requisição
    const resultado = await api.post('/consulta', {
      especialista: especialistaId,
      paciente: pacienteId,
      data: dataFormatada,  // Data formatada no formato ISO
      desejaLembrete: desejaLembrete,
      lembrete: lembrete
    });

    return resultado.data;
  } catch (error) {
    if (error.response) {
      console.log("Erro na resposta:", error.response.data);
    } else {
      console.log("Erro na requisição:", error);
    }
    return null;
  }
}



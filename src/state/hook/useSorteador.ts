import shuffle from "just-shuffle"
import { useListaParticipantes } from "./useListaParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecreto } from "../atom"
import { realizarSorteio } from "../helper/realizarSorteio"

export const useSorteador = ()=>{

    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)
    
    const participantes = useListaParticipantes()
    //Ana, João, Maria

    return ()=>{

        const resultado = realizarSorteio(participantes) // REALIZAR SORTEIO --> FUNÇÃO EM OUTRO ARQUIVO

        setResultado(resultado)
        //usando a função do setRecoilState, passamos pro atom resultadoDoAmigoSecreto
        // passamos pra ele a const resultado que agora é um dicionario completo com os amigos sorteados
    }
}
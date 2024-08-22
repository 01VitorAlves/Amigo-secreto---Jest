import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const resultadoDoAmigoSecreto = atom<Map<string, string>>({  //tem que tipar que o atom é um map e tipar qual tipo da chave e valor desse dicionario
    key: 'resultadoDoAmigoSecreto',
    default: new Map()
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
})
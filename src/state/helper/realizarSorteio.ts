import shuffle from "just-shuffle"

export function realizarSorteio(participantes : string[]) {

    const totalDeParticipantes = participantes.length
        // 3

        const embaralhado = shuffle(participantes)
        // Maria[0], Ana[1], João[2]
        
        const resultado = new Map<string, string>()
        //new Map é a mesma coisa de dicionario, aqui temos <chave, valor> sendo que ambos são strings
        //vamos criar um dicionario com strings pq a chave é um amigo e o valor é o amigo que ele tirou no sorteio



        for (let index = 0; index < totalDeParticipantes; index++) {
            //Roda o for, esse código abaixo 3 vezes, aumentando o index em 1:
           
            const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1
            //index é igual 3-1(2) ? indiceDoAmigo = 0
            //Se chgar na ultima posição do array que é 2, então sempre aponta para o primeiro item do array que é 0

            //Se o index que está aumentando for 0, ele irá apontar para o 1, se for 1 irá apontar para o 2
            // Maria[0] irá tirar Ana[1] ---- Ana[1] -> João[2] // João[2] -> Maria[0]


            resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
            //Aqui vamos moldando o dicionario igual na linha 31
            //Adicionando na const resultado, cada amigo e o amigo que ele tirou no sorteio 
        }

        return resultado

      

}

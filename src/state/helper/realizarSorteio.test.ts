import { realizarSorteio } from "./realizarSorteio"

describe("dado um sorteio de amigo secreto ", ()=>{

    test("que cada participante não sorteie o proprio nome", ()=>{
        
        const participantes = ["Ana", "Maria, João"]




        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante =>{
            const amigoSecreto = sorteio.get(participante)

            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})
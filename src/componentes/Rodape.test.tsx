import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaParticipantes } from "../state/hook/useListaParticipantes";
import { click } from "@testing-library/user-event/dist/click";
import { useSorteador } from "../state/hook/useSorteador";


jest.mock("../state/hook/useListaParticipantes",()=>{
    return{
        useListaParticipantes : jest.fn()
    }
})



const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock("react-router-dom", ()=>{

    return{
        useNavigate: () => mockNavegacao
    }
    
})

jest.mock("../state/hook/useSorteador", ()=>{

    return{
        useSorteador: () => mockSorteio
    }
    
})



describe("Quando não existem participantes suficientes", ()=>{

    beforeEach( ()=>{
        
        ( useListaParticipantes as jest.Mock).mockReturnValue([])
     })

    test("A brincadeira não deve ser iniciada", ()=>{
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)
        
        const botao = screen.getByRole("button")

        expect(botao).toBeDisabled()
    })
})



describe("Quando  existem participantes suficientes", ()=>{

    const participantes = ["wendjo", "cunamata" , "babyGrosso"]

    beforeEach( ()=>{
        
        ( useListaParticipantes as jest.Mock).mockReturnValue(participantes)
     })

    test("A brincadeira deve ser iniciada", ()=>{
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)
        
        const botao = screen.getByRole("button")

        expect(botao).toBeEnabled()
    })



    test("A brincadeira foi iniciada", ()=>{
        render(<RecoilRoot>
            <Rodape/>
        </RecoilRoot>)
        
        const botao = screen.getByRole("button")

        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith("/sorteio")
        expect(mockSorteio).toHaveBeenCalledTimes(1)

    })
})
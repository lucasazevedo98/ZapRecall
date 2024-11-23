
import { useState } from "react"
import CartaoIdentificador from "./CartaoIdentificador"
import CartaoPrincipal from "./CartaoPrincipal"
import styled from "styled-components"




export default function Cartoes({ pergunta, id,resposta,contadorFinal,setContadorFinal }) {


    const [iniciar, setIniciar] = useState('flex')
    const [mostrarCartao, setMostrarCartao] = useState('none')
    const [alterarCor, setAlterarCor] = useState('black')




    return (
        <Cartao>
            <CartaoIdentificador alterarCor={alterarCor}  contador={id + 1} setIniciar={setIniciar} iniciar={iniciar} setMostrarCartao={setMostrarCartao }></CartaoIdentificador>
            <CartaoPrincipal  contadorFinal={contadorFinal} setContadorFinal={setContadorFinal} setAlterarCor={setAlterarCor} setIniciar={setIniciar} setMostrarCartao={setMostrarCartao } pergunta={pergunta} iniciar={iniciar} resposta={resposta} mostrarCartao={mostrarCartao}></CartaoPrincipal>
        </Cartao>

    )
}


const Cartao = styled.div`
    margin-top:10px;
    position: relative;


`





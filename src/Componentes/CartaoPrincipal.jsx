import styled from "styled-components"
import virarCartao from "../assets/seta_virar.png"
import { useState } from "react"

export default function CartaoPrincipal({ pergunta, resposta, mostrarCartao,setIniciar,setMostrarCartao,setAlterarCor }) {

    const botoes = [{ nome: "Não lembrei", cor: "#FF3030" }, 
        { nome: "Quase não lembrei", cor: "#FF922E" }, 
        { nome: "Zap!", cor: "#2FBE34" }
    ]

    const [virar, setVirar] = useState(false)
    const [ocultarBotao, setOcultarBotao] = useState('flex')
    const [ocultarBotoes, setOcultarBotoes] = useState('none')

    function botaoVirar() {
        setVirar(true)
        setOcultarBotao('none')
        setOcultarBotoes('flex')
    }

    function funcaoBotao(cor) {
        setIniciar('flex')
        setMostrarCartao('none')
        setAlterarCor(cor)



    }

    return (
        <Cartao mostrarCartao={mostrarCartao} ocultarBotao={ocultarBotao}>
            <p>{virar ? resposta : pergunta}</p>
            <img onClick={botaoVirar} src={virarCartao} />

            <Botoes ocultarBotoes={ocultarBotoes}>
                {botoes.map((botao) => (
                    <Botao cor={botao.cor} onClick={() => funcaoBotao(botao.cor)}>{botao.nome}</Botao>
                ))}
            </Botoes>
        </Cartao>
    )
}


const Cartao = styled.div`
    width:320px;
    height:131px;
    background-color:#FFFFD4;
    border-radius:5px;
    display:${(props) => (props.mostrarCartao)};

    p {
        font-size:18px;
        font-family:"Recursive";
        margin-top:10px;
        margin-left:10px;
    }

    img {
        width:30px;
        height:20px;
        position:absolute;
        bottom:10px;
        right:0;
        display:${(props) => props.ocultarBotao}
    }
`

const Botoes = styled.div`
    width:106%;
    height:37.17px;
    position:absolute;
    bottom:2px;
    display:${(props) => (props.ocultarBotoes)};
    justify-content:space-around;

`

const Botao = styled.button`
width: 80.17px;
height: 37.17px;

background-color:${(props) => (props.cor)};
border:none;
color:white;
border-radius:5px;




`
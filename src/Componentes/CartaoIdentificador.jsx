import styled from "styled-components"
import play from "../assets/seta_play.png"
import error from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import certo from "../assets/icone_certo.png"
import { useState } from "react"


export default function CartaoIdentificador({ contador, iniciar, setIniciar, setMostrarCartao, alterarCor }) {




    function a() {
        setIniciar('none')
        setMostrarCartao('flex')
    }


    return (
        <Cartao iniciar={iniciar} alterarCor={alterarCor}>
            <p> Pergunta {contador}</p>
            <img onClick={alterarCor == 'black' ? a : undefined} 
            src={alterarCor === 'black' ? play : 
            alterarCor === '#FF3030' ? error :
            alterarCor === '#FF922E' ? quase : certo } />
        </Cartao>
    )
}


const Cartao = styled.div`
    background-color:white;
    width:300px;
    height:60px;
    color:${(props) => (props.alterarCor)};
    border-radius:5px;
    align-items:center;
    justify-content:space-between;
    padding-left:10px;
    padding-right:10px;
    display:${(props) => (props.iniciar)};
    


    p{
        font-size:16px;
        font-family:"Recursive";
        font-weight:bold;
        text-decoration: ${(props) => (props.alterarCor == "black" ? "" : "line-through")};

    }
    img {
        cursor:pointer;
    }

`
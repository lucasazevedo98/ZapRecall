import styled from "styled-components"
import perguntas from "./Data"

export default function Footer({contadorFinal}) {
    return(
        <Rodape>
            {contadorFinal}/{perguntas.length} concluido
        </Rodape>
    )
}


const Rodape = styled.div `
    width: 100%;
    background-color:white;
    position: fixed;
    bottom:0;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    font-family:"Recursive";
    color:#333333;



`
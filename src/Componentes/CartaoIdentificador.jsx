import styled from "styled-components"
import play from "../assets/seta_play.png"


export default function CartaoIdentificador({contador,iniciar,setIniciar,setMostrarCartao,alterarCor}) {


    function a() {
        setIniciar('none')
        setMostrarCartao('flex')
    }


    return (
        <Cartao iniciar={iniciar} alterarCor={alterarCor}>
            <p> Pergunta {contador}</p>
            <img onClick={a} src={play} />
        </Cartao>
    )
}


const Cartao = styled.div`
    background-color:white;
    width:300px;
    height:60px;
    color:${(props)=>(props.alterarCor)};
    border-radius:5px;
    align-items:center;
    justify-content:space-between;
    padding-left:10px;
    padding-right:10px;
    display:${(props) =>(props.iniciar)};


    p{
        font-size:16px;
        font-family:"Recursive";
        font-weight:bold;

    }
    img {
        cursor:pointer;
    }

`
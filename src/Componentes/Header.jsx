import logo from "../assets/logo.png"
import styled from "styled-components"

function Header() {
    return (
        <Topo>
            <img src={logo} />
            <h1>ZapRecall</h1>
        </Topo>
    )
}

export default Header


const Topo = styled.div`
width:100%;
height:60px;
display:flex;
align-items:center;
justify-content:center;

img {
    width:60px;
    height:60px;
    margin-right:10px;
    margin-top:50px;
}

h1 {
    color:white;
    font-family:"Recursive";
    font-weight:bold;
    font-size:50px;
    margin-top:50px;
}

`

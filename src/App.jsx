import styled from "styled-components"
import Header from "./Componentes/Header"
import Cartoes from "./Componentes/Cartoes";
import perguntas from "./Componentes/Data";
import Footer from "./Componentes/Footer";
import { useState } from "react";




function App() {

  const [contadorFinal,setContadorFinal] = useState(0)

  return (
    <AppContainer>
      <Header />
      <CartoesContainer>
        {perguntas.map((perguntas,i) => (
          <Cartoes 
          contadorFinal={contadorFinal}
          setContadorFinal={setContadorFinal} 
          key={i} 
          pergunta={perguntas.pergunta} 
          resposta={perguntas.resposta} 
          id={i} />
        ))}
      </CartoesContainer>
      <Footer contadorFinal={contadorFinal}/>
    </AppContainer>

  )
}

export default App


const AppContainer = styled.div`
  background-color: #FB6B6B; /* Cor de fundo */
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-bottom:50px;
`;

const CartoesContainer = styled.div`
  width:300px;
  margin-top:100px;
  height:100%;
`
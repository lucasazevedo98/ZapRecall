import styled from "styled-components"
import Header from "./Componentes/Header"
import Cartoes from "./Componentes/Cartoes";
import perguntas from "./Componentes/Data";




function App() {

  return (
    <AppContainer>
      <Header />
      <CartoesContainer>
        {perguntas.map((perguntas,i) => (
          <Cartoes key={i} pergunta={perguntas.pergunta} resposta={perguntas.resposta} id={i} />
        ))}
      </CartoesContainer>
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
`;

const CartoesContainer = styled.div`
  width:300px;
  margin-top:100px;
  height:100%;
`
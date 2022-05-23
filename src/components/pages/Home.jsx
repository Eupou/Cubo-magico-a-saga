import styled from "styled-components";

import allMoves from "../assets/movimentosTodasFaces.jpg";
import upMoves from "../assets/movimentosCima.jpg";
import downMoves from "../assets/movimentosBaixo.jpg";
import middleCube from "../assets/cuboMeios.jpg";
import centerCube from "../assets/cuboCentros.jpg";
import cornerCube from "../assets/cuboCantos.jpg";

import Heading from "../Section/Heading";
import Paragraph from "../Section/Paragraph";
import Section from "../Section/Section";
import Figure from "../figure/Figure";

const ContaienerImg = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <Section>
      <Heading level="h1" fontSize="30px">
        Home
      </Heading>
      <Paragraph>
        Nesse projeto eu vou documentar toda minha jornada até construir um cubo
        mágico 3d, como ainda não tenho conhecimento suficiente para fazer um 3d
        eu vou fazer um 2d e explicar todo o processo da construção.
      </Paragraph>

      <Heading level="h3" fontSize="24px" marginTop="50px">
        Explicando o cubo mágico
      </Heading>
      <Paragraph>
        Um cubo mágico convecional tem 6 faces e cada lado contém 9 peças e
        essas peças podem ser separadas em categorias fáceis de serem
        percebidas, os cantos, os meios e os centros
      </Paragraph>

      <ContaienerImg>
        <Figure
          alt="cubo mágico"
          imgUrl={centerCube}
          captionText="Peças do centro"
        />
        <Figure
          alt="cubo mágico"
          imgUrl={cornerCube}
          captionText="Peças do canto"
        />
        <Figure
          alt="cubo mágico"
          imgUrl={middleCube}
          captionText="Peças do meio"
        />
      </ContaienerImg>

      <Heading level="h3" fontSize="24px" marginTop="50px">
        Os movimentos do cubo.
      </Heading>
      <Paragraph>
        O cubo tem 7 movimentos, os mesmos movimentos na direção contrária e
        isso acontence em todas as faces dele.
      </Paragraph>

      <ContaienerImg>
        <Figure alt="" imgUrl={upMoves} captionText="movimentos pra fora" />
        <Figure
          alt=""
          imgUrl={downMoves}
          captionText="movimentos para dentro"
        />
        <Figure
          alt=""
          imgUrl={allMoves}
          captionText="movimento em todas as faces"
        />
      </ContaienerImg>
    </Section>
  );
};

export default Home;

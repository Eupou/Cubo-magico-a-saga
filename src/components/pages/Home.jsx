import styled from "styled-components";

import defaultCube from "../assets/cuboBranco.png";
import middleCube from "../assets/cuboMeios.jpg";
import centerCube from "../assets/cuboCentros.jpg";
import cornerCube from "../assets/cuboCantos.jpg";

import Heading from "../section/Heading";
import Paragraph from "../section/Paragraph";
import Section from "../section/Section";
import Figure from "../figure/Figure";

const ContaienerImg = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
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

      <Heading level="h3" fontSize="24px" marginTop="20px">
        Explicando o cubo mágico
      </Heading>
      <Paragraph>
        Um cubo mágico convecional tem 6 lados e cada lado contém 9 peças e
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
    </Section>
  );
};

export default Home;

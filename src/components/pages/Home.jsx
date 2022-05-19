import styled from "styled-components";

import Heading from "../Section/Heading";
import Paragraph from "../Section/Paragraph";

const Section = styled.section`
  width: 60vw;
  height: 100%;
  margin-top: 50px;
`;

const Home = () => {
  return (
    <Section>
      <Heading level="h1" fontSize="30px">
        Home
      </Heading>
      <Paragraph>
        Nesse projeto eu vou documentar toda minha jornada até construir um cubo
        mágico 3d, como ainda não conhecimento suficiente para fazer um 3d eu
        vou fazer um 2d e explicar todo o processo da construção.
      </Paragraph>
    </Section>
  );
};

export default Home;

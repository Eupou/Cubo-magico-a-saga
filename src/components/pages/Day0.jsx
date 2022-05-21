import Heading from "../Section/Heading";
import Paragraph from "../Section/Paragraph";
import Section from "../Section/Section";

import CodeWrapper from "../codeSection/CodeWrapper";
import CodeLine from "../codeSection/CodeLine";
import Hlt from "../codeSection/Hlt";
import Comment from "../codeSection/Comment";

const Day0 = () => {
  let lastLineN = 0;

  function resetLineNumber() {
    lastLineN = 0;
  }

  return (
    <Section>
      <Heading level="h1" fontSize="30px">
        Dia 0
      </Heading>
      <Paragraph>
        O primeiro dia em qualquer coisa é sempre o mais difícil já que não
        sabemos de nada ainda, quando eu comecei a pensar em uma forma de montar
        um cubo 3d(tridimensional) de forma 2d(bidimensinal), tive a primeira
        ideia de colocar ele em um array, na minha cabeça eu comecei a pensar em
        algo mais ou menos assim...
      </Paragraph>
      <CodeWrapper>
        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>
            Como um cubo convencional tem 6 lados, vou representar cada lado
            como um número.
          </Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> magicCube = [--- 444 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={16}>
          [--- 444 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={16}>
          [--- 444 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={16}>
          [333 000 111]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={16}>
          [333 000 111]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={16}>
          [333 000 111]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={16}>
          [--- 222 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={16}>
          [--- 222 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={15}>
          [--- 222 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={15}>
          [--- 555 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={15}>
          [--- 555 ---]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={15}>
          [--- 555 ---]
        </CodeLine>
      </CodeWrapper>
      <Paragraph>
        Só que mecher em array desse jeito ia acabar ficando mais complexo do
        que o necessário e talvez até mesmo nos impossibilitar de resolver o
        nosso problema, por isso eu dividi o array em partes, um array para face
        do cubo
      </Paragraph>
      <CodeWrapper>
        {resetLineNumber()}
        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>O cubo tem 6 lados</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>O parte da frente</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> front = [0, 0, 0
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>A parte de tras</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> back = [1, 1, 1
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          1, 1, 1
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          1, 1, 1]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment></Comment>
        </CodeLine>
      </CodeWrapper>
    </Section>
  );
};

export default Day0;

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
      <Heading level="h2" fontSize="25px" marginTop="15px">
        Pensado em como construir o cubo
      </Heading>
      <Paragraph>
        O primeiro dia em qualquer coisa é sempre o mais difícil já que não
        sabemos de nada ainda, quando eu comecei a pensar em uma forma de montar
        um cubo 3d(tridimensional) de forma 2d(bidimensional), tive a primeira
        idéia de colocar ele em um array, na minha cabeça eu comecei a pensar em
        algo mais ou menos assim. Ah, só uma observação, nessa primeira parte
        não leve a sintaxe muito a sério. Você vai perceber que muita coisa não
        estaria funcionando se você colocasse em um arquivo .js, é porque a
        intenção nesse primeiro momento é botar a ideia na cabeça de vocês,
        então desconsiderem os erros de sintaxe ;)
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
        Só que mexer em array desse jeito ia acabar ficando mais complexo do que
        o necessário e talvez até mesmo nos impossibilitar de resolver o nosso
        problema, por isso eu dividi o array em partes, um array para cada face
        do cubo.
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
          <Hlt>let</Hlt> front = [0, 0, 0,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>A parte de trás</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> back = [1, 1, 1,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          1, 1, 1,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          1, 1, 1]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>A parte da direita</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> right = [2, 2, 2,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          2, 2, 2,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          2, 2, 2]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>A parte da esquerda</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> left = [3, 3, 3,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          3, 3, 3,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          3, 3, 3]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>A parte da cima</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> top = [4, 4, 4,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          4, 4, 4,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          4, 4, 4]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>A parte da baixo</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> bottom = [5, 5, 5,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={14}>
          5, 5, 5,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={14}>
          5, 5, 5]
        </CodeLine>
      </CodeWrapper>

      <Heading level="h3" fontSize={"25px"} marginTop="50px">
        Movendo o cubo
      </Heading>

      <Paragraph>
        Pronto, agora vamos tentar mover uma parte do cubo para direita,
        primeiro vamos definir uma face para ser nossa referência, obviamente eu
        vou a escolher a frente para ser a que fica virada para nós.
      </Paragraph>

      <Paragraph>
        Vamos mover a parte de cima da frente para direita, para isso nós não
        vamos mover apenas uma face do cubo, mas sim cinco: a da frente vai para
        direita, a da direita vai para trás, a de trás vai para a esquerda, a da
        esquerda vai pra frente e a de cima rotaciona em si mesma. ficando mais
        ou menos assim...
      </Paragraph>

      {resetLineNumber()}
      <CodeWrapper>
        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>
            Nós temos que começar removendo os três primeiros elementos da
            frente e passar para direita
          </Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> front = [-, -, -{" "}
          <Comment>Passando [0, 0, 0] para direita</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>
            Recebendo a parte da frente e passa [2, 2, 2] para trás
          </Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> right = [0, 0, 0
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          2, 2, 2,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          2, 2, 2]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>
            Recebe a parte da direita e passa [1, 1, 1] para esquerda
          </Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> back = [2, 2, 2
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          1, 1, 1,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          1, 1, 1]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>
            Recebe a parte de trás e passa [3, 3, 3] para frente
          </Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> left = [1, 1, 1
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          3, 3, 3,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={12}>
          3, 3, 3]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>Recebe a parte da esquerda</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> front = [3, 3, 3,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={13}>
          0, 0, 0]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>
            E para finalizar nós precisamos rodar a parte de cima
          </Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>
            Vou representar o primeiro elemento como um x para nós notarmos
            alguma diferença
          </Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>Vai disso</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> top = [x, 4, 4,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          4, 4, 4,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          4, 4, 4]
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}></CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Comment>Para isso</Comment>
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)}>
          <Hlt>let</Hlt> top = [4, 4, 4
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          4, 4, 4,
        </CodeLine>

        <CodeLine lineNum={(lastLineN += 1)} indent={11}>
          x, 4, 4]
        </CodeLine>
      </CodeWrapper>

      <Paragraph>
        Com essas ideias básicas na cabeça, acho que finalmente estamos prontos
        para prossegir e colocar a mão na massa e começar construir o cubo.
      </Paragraph>
    </Section>
  );
};

export default Day0;

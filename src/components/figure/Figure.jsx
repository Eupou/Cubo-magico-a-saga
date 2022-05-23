import styled from "styled-components";

const StyledFigure = styled.figure`
  display: flex;
  flex-flow: column;
  width: ${(props) => props.figWidth || 250}px;
  height: ${(props) => props.figHeight || 370}px;
  background-color: #1e1e1e;
  border-radius: 10px;

  @media (max-width: 450px) {
    margin: auto;
    width: 300px;
    height: 450px;
  }

  & + & {
    @media (max-width: 450px) {
      margin-top: 15px;
    }
  }
`;

const FigureCaption = styled.figcaption`
  color: white;
  margin: auto;
`;

const Img = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: ${(props) => props.imgWidth || 250}px;
  height: ${(props) => props.imgHeight}px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

/**
 *
 * @param imgUrl ***string*** the url of the image
 * @param alt ***string*** alternative text
 * @param captionText ***string*** the caption of the image
 * @param figWidth ***number*** width of the container of the image
 * @param figHeight ***number*** height of the container of the image
 * @param imgWidth ***number*** height of the image
 * @param imgHeight ***number*** width of the image
 *
 * @example
 * <Figure imgUrl="suaImagemUrl" alt="imagem" captionText="sou uma imagem" imgWidth="100"/>
 */
const Figure = ({
  imgUrl,
  alt,
  captionText,
  figWidth,
  figHeight,
  imgWidth,
  imgHeight,
}) => {
  return (
    <StyledFigure figWidth={figWidth} figHeight={figHeight}>
      <Img
        src={imgUrl}
        alt={alt}
        imgHeight={imgHeight}
        imgWidth={imgWidth}
      ></Img>
      <FigureCaption>{captionText}</FigureCaption>
    </StyledFigure>
  );
};

export default Figure;

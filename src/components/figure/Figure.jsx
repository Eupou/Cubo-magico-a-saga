import styled from "styled-components";

const StyledFigure = styled.figure`
  display: flex;
  flex-flow: column;
  width: 250px;
  height: 100%;
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
  /* margin: auto; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 250px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

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

import styled from "styled-components";

const StyledFigure = styled.figure`
  display: flex;
  flex-flow: column;
  width: 250px;
  height: 360px;
  background-color: #1e1e1e;
  border-radius: 10px;
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

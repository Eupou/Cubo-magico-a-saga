import styled from "styled-components";

const StyledHeading = styled.h1`
  color: white;
  font-size: ${(props) => props.fontSize || "20px"};
  margin-top: ${(props) => props.marginTop || "0px"};
`;

/**
 *
 * @param string *level* "h1" to "h6"
 * @param string *fontSize* "10px", "20px" ...
 * @param string *marginTop* "5px", "7px" ...
 * @example <Heading level="h1" fontSize="17px">Text</Heading> // <h1>Text</h1>
 */
const Heading = ({ children, level, fontSize, marginTop }) => {
  return (
    <StyledHeading as={level} fontSize={fontSize} marginTop={marginTop}>
      {children}
    </StyledHeading>
  );
};

export default Heading;

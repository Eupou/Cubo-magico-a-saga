import styled from "styled-components";

const StyledParagraph = styled.p`
  color: #e4e1e1;
  margin-top: 15px;
  font-size: 18px;
`;

/**
 * Returns an paragraph formated
 *
 */
const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;

import styled from "styled-components";

const StyledSection = styled.section`
  width: 60vw;
  /* height: 100%; */
  margin-top: 50px;
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;

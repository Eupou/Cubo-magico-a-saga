import styled from "styled-components";

const StyledSection = styled.section`
  width: 60vw;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;

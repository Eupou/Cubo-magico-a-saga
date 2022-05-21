import styled from "styled-components";

//#region style
const StyledCodeWrapper = styled.div`
  border-radius: 10px;
  background-color: #1e1e1e;
  color: #b6b6b6;
  padding: 15px 20px;
  margin: 25px 0;
`;

//#endregion

const CodeWrapper = ({ children }) => {
  return (
    <StyledCodeWrapper data-lang="js">
      <div>{children}</div>
    </StyledCodeWrapper>
  );
};

export default CodeWrapper;

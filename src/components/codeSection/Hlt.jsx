import styled from "styled-components";

const HightLightedWord = styled.span`
  color: red;
  font-family: "Courier New", Courier, monospace;
`;

/**
 * returns a highlighted reserved word, like: for, let, while ...
 * @example
 * <Hlt>let</Hlt> minhaVar = 0
 * // result, let must apper with another color
 * let minhaVar = 0
 */
const Hlt = ({ children }) => {
  return <HightLightedWord>{children}</HightLightedWord>;
};

export default Hlt;

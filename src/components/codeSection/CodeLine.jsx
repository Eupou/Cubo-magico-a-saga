import styled from "styled-components";

const StyledCodeline = styled.span`
  margin-left: 15px;
  font-family: "Courier New", Courier, monospace;
  margin-left: ${(props) => props.marginLeft * 9.6 + 15}px;
`;

const Number = styled.span`
  font-size: 15px;
  color: #b6b6b6a4;
  font-weight: 400;
  font-family: "Courier New", Courier, monospace;
`;

/**
 * Returns the of the line
 *
 * @param lineNum The number of the line
 * @example
 * <CodeLine lineNum={1}>content</CodeLine>
 * <CodeLine lineNum={2}>more content</CodeLine>
 * // returns
 * 1 content
 * 2 more content
 */
const CodeLine = ({ children, lineNum, indent }) => {
  return (
    <div>
      <Number>{lineNum}</Number>
      <StyledCodeline marginLeft={indent}>{children}</StyledCodeline>
    </div>
  );
};

export default CodeLine;

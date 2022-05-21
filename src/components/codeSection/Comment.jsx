import styled from "styled-components";

const StyledComment = styled.span`
  color: #03be03;
  font-family: "Courier New", Courier, monospace;
`;

/**
 * Returns a commented code
 *
 * @example
 * <Comment>I am a comment ;)</Comment>
 * // return as bellow
 * // I am a comment ;)
 */
const Comment = ({ children }) => {
  return <StyledComment>// {children}</StyledComment>;
};

export default Comment;

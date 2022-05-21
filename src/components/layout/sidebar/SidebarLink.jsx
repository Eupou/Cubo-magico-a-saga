import styled from "styled-components";

import { Link } from "react-router-dom";

//#region style
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 20px;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #4b4a4aba;

  &:hover {
    background-color: #4949496b;
    cursor: pointer;
  }
`;

const LinkText = styled.p`
  margin-left: 2.5vw;
`;
//#endregion

/**
 * Retuns a sidebar item that's an link
 *
 * @param to *string*: path to an page
 * @param text *string*: text that will be diplayed on the link
 * @example <SidebarLink to="home" text="Home" />
 */
const SidebarLink = ({ to, text }) => {
  return (
    <StyledLink to={to}>
      <LinkText>{text}</LinkText>
    </StyledLink>
  );
};

export default SidebarLink;

import { Link } from "react-router-dom";

import styled from "styled-components";

//#region style
const StyledSidebar = styled.div`
  margin-left: ${(props) => (props.mode == true ? "calc(-20vw - 1px)" : "0")};
  margin-top: 8vh;
  height: 100vh;
  width: 20vw;
  background-color: #202020;
  border-right: 1px solid #4b4a4aba;
  transition: 0.3s ease-in-out;
`;

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

const Sidebar = ({ sidebarStatus }) => {
  return (
    <StyledSidebar mode={sidebarStatus}>
      <StyledLink exact to="/">
        <LinkText>Home</LinkText>
      </StyledLink>
      <StyledLink to="/day0">
        <LinkText>Dia 0</LinkText>
      </StyledLink>
    </StyledSidebar>
  );
};

export default Sidebar;

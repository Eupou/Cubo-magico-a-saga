import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledSidebar = styled.div`
  margin-left: ${(props) => (props.mode ? "-20vw" : "0")};
  margin-top: 8vh;
  height: 100vh;
  width: 20vw;
  background-color: #202020;
  border-right: 1px solid #4b4a4aba;
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
`;

const LinkText = styled.p`
  margin-left: 2.5vw;
`;

const Sidebar = ({ sidebarStatus }) => {
  return (
    <StyledSidebar mode={sidebarStatus}>
      <StyledLink to="/day0">
        <LinkText>Dia 0</LinkText>
      </StyledLink>
    </StyledSidebar>
  );
};

export default Sidebar;

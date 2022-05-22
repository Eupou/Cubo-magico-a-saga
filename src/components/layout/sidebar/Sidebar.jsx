import styled from "styled-components";

import SidebarLink from "./SidebarLink";

//#region style
const StyledSidebar = styled.div`
  margin-left: ${(props) =>
    props.mode === "true" ? "calc(-20vw - 1px)" : "0"};
  margin-top: 8vh;
  width: 20vw;
  background-color: #202020;
  border-right: 1px solid #4b4a4aba;
  transition: 0.3s ease-in-out;

  @media (max-width: 450px) {
    position: fixed;
    top: 0;
    margin-top: 0;
    margin-left: ${(props) =>
      props.mode === "true" ? "calc(-60vw - 1px)" : "0"};
    z-index: 1000000000;
    height: 100vh;
    width: 60vw;
  }
`;
//#endregion

const Sidebar = ({ sidebarStatus }) => {
  return (
    <StyledSidebar mode={sidebarStatus ? "true" : "false"}>
      <SidebarLink to="/" text="Home" />
      <SidebarLink to="/day0" text="Dia 0" />
    </StyledSidebar>
  );
};

export default Sidebar;

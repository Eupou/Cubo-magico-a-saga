import styled from "styled-components";

import img from "../../logo.svg";
import MenuHamburguer from "./MenuHamburguer";

//#region style
const Header = styled.header`
  position: absolute;
  z-index: 1000000;
  width: 100%;
  height: 8vh;
  background-color: #202020;
  box-shadow: 0 5px 5px #0c0c0cb6;
  color: #e7e5e5;

  @media (max-width: 450px) {
    height: 10vh;
    position: sticky;
    top: 0;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  height: inherit;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;

const Img = styled.img``;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
//#endregion

const Navbar = ({ setSidebarStatus }) => {
  return (
    <Header>
      <HeaderWrapper>
        <LogoWrapper>
          <Img src={img}></Img>
          <Title>Cubo mágico, a saga</Title>
        </LogoWrapper>
        <MenuHamburguer setSidebarStatus={(e) => setSidebarStatus(e)} />
      </HeaderWrapper>
    </Header>
  );
};

export default Navbar;

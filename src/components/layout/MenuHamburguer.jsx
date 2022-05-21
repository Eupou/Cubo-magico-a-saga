import styled from "styled-components";

//#region style
const StyledMenuHamburguer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-direction: column;
  transition: 0.7s;

  &:hover {
    background-color: #4949496b;
    cursor: pointer;
  }
`;

const MenuBar = styled.span`
  background-color: #e7e5e5;
  height: 2px;
  width: 20px;

  & + & {
    margin-top: 4px;
  }
`;
//#endregion

const MenuHamburguer = ({ setSidebarStatus }) => {
  return (
    <StyledMenuHamburguer
      onClick={() => setSidebarStatus((prevValue) => !prevValue)}
    >
      <MenuBar></MenuBar>
      <MenuBar></MenuBar>
      <MenuBar></MenuBar>
    </StyledMenuHamburguer>
  );
};

export default MenuHamburguer;

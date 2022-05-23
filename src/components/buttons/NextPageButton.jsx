import styled from "styled-components";

import { Link } from "react-router-dom";

const Button = styled(Link)`
  text-decoration: none;
  background-color: #202020;
  padding: 10px 50px;
  color: white;
  border: 1px solid #4b4a4aba;

  &:hover {
    background-color: #4949496b;
    cursor: pointer;
  }
`;

const NextPageButton = ({ text, to }) => {
  return <Button to={to}>{text}</Button>;
};

export default NextPageButton;

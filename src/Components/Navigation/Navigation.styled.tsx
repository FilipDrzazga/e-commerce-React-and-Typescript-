import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 5vh;
`;
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  letter-spacing: 0.2rem;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
const MenuBtn = styled.button`
  width: auto;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const ShopBtn = styled.button`
  width: auto;
  height: 3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export { Header, Nav, Title, MenuBtn, ShopBtn };

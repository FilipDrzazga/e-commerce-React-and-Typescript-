import { styled } from "styled-components";

const ShoppingCard = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 70vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  z-index: 999;
`;

export { ShoppingCard };

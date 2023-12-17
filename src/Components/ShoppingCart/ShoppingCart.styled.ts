import { styled } from "styled-components";

const ShoppingCard = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 70vw;
  min-height: 100vh;
  margin-left: 30vw;
  background-color: ${({ theme }) => theme.colors.gray};
  z-index: 999;
`;

export { ShoppingCard };

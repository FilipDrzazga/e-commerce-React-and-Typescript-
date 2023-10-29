import styled from "styled-components";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  padding: ${({ theme }) => theme.padding[0]};
  padding-left: ${({ theme }) => theme.padding[1]};
  padding-right: ${({ theme }) => theme.padding[1]};
`;

export { Container };

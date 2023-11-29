import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding: ${({ theme }) => theme.padding[0]};
  padding-left: ${({ theme }) => theme.padding[1]};
  padding-right: ${({ theme }) => theme.padding[1]};
`;

export { Container };

import styled from "styled-components";

type Props = {
  $isScroll: boolean;
};

const Container = styled.section<Props>`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding: ${({ theme }) => theme.padding[0]};
  padding-left: ${({ theme }) => theme.padding[1]};
  padding-right: ${({ theme }) => theme.padding[1]};
  overflow-y: ${({ $isScroll }) => ($isScroll === true ? "hidden" : "auto")};
`;

export { Container };

import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightBlue};
`;
const Title = styled.h1`
  width: 100%;
  height: auto;
  text-align: center;
  font-size: ${(props) => props.theme.fontsSize.xxl};
`;
const SubTitle = styled.h2`
  width: 100%;
  height: auto;
  letter-spacing: 1.5rem;
  text-align: center;
  font-size: ${(props) => props.theme.fontsSize.l};
  color: ${(props) => props.theme.colors.purple};
`;

export { Section, Title, SubTitle };

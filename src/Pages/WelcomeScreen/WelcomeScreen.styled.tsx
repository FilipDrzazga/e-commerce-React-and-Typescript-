import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const Title = styled.h1`
  width: 100%;
  height: 100%;
  font-stretch: expanded;
  //   width: 100%;
  font-size: 8rem;
  //   font-family: "Oswald";
  //   font-weight: 700;
  //   letter-spacing: -5rem;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

export { Section, Title };

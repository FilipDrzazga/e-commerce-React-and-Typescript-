import styled from "styled-components";

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontsSize.special};
  color: ${({ theme }) => theme.colors.lightBlack};
  letter-spacing: 3rem;
  white-space: nowrap;
  font-weight: 700;
  &:after {
    position: absolute;
    top: 45%;
    left: 50%;
    content: "rose wine";
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontsSize.xxl};
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 0.3rem;
  }
`;
const ParagraphContainer = styled.div`
  width: 55%;
  margin: auto;
  margin-top: -3rem;
`;
const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8rem;
  text-align: center;
  word-spacing: 0.3rem;
  letter-spacing: 0.1rem;
`;
export { Section, Title, ParagraphContainer, Paragraph };

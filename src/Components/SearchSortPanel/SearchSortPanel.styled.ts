import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  width: 100%;
  height: 30%;
`;
const InputContainer = styled.div`
  position: relative;
  width: 20%;
  height: 15%;
  svg {
    position: absolute;
    top: 10px;
    right: 15px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 0.5rem;
  font-size: ${({ theme }) => theme.fontsSize.m};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
`;
const Button = styled.button`
  width: 10%;
  height: 15%;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  border: none;
  font-size: ${({ theme }) => theme.fontsSize.m};
  svg {
    margin-left: 1.3rem;
  }
`;
export { Section, InputContainer, Input, Button };

import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Nav = styled.nav`
  width: 50%;
  height: 95%;
`;
const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style-type: none;
`;
const Item = styled.li`
  font-size: ${({ theme }) => theme.fontsSize.xl};
  font-weight: 700;
  letter-spacing: 3rem;
  cursor: pointer;
`;
const ImgContainer = styled.article`
  width: 50%;
  height: 95%;
  img {
    weight: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { Section, Nav, List, Item, ImgContainer };

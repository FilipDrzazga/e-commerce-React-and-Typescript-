import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Nav = styled.nav`
  width: 50%;
  height: 95%;
  padding-left: 10rem;
`;
const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  list-style-type: none;
`;
const Item = styled.li`
  font-size: ${({ theme }) => theme.fontsSize.xl};
  font-weight: 700;
  letter-spacing: 3rem;
  cursor: pointer;
`;
const ItemLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;
const ImgContainer = styled.article`
  width: 50%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    weight: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

export { Section, Nav, List, Item, ItemLink, ImgContainer };

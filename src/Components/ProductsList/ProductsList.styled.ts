import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  width: 100%;
`;
const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5rem;
  list-style-type: none;
`;
const Item = styled.li`
  position: relative;
  width: 30%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemLink = styled(Link)`
  width: 100%;
  height: 100%;
`;
const ItemImgContainer = styled.div`
  width: 100%;
  height: 80%;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ItemDescriptionContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  gap: 1rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontsSize.m};
`;
const ItemName = styled.p`
  width: 80%;
  line-height: 2rem;
  text-align: center;
`;
const ItemPrice = styled.p`
  font-weight: 400;
`;
const AddBtn = styled.button`
  position: absolute;
  bottom: calc(20% + 2rem);
  left: 8rem;
  background-color: transparent;
  border: none;
`;
const RemoveBtn = styled.button`
  position: absolute;
  bottom: calc(20% + 2rem);
  right: 8rem;
  background-color: transparent;
  border: none;
`;

export {
  Section,
  List,
  Item,
  ItemLink,
  ItemImgContainer,
  ItemImg,
  ItemDescriptionContainer,
  ItemName,
  ItemPrice,
  AddBtn,
  RemoveBtn,
};

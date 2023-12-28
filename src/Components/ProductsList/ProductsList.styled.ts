import styled from "styled-components";
import { Link } from "react-router-dom";
import { randomBackgroundColor } from "../../helpers";

type Props = {
  $isScroll?: boolean;
};

const Section = styled.section<Props>`
  width: 100%;
  min-height: 100vh;
`;
const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  list-style-type: none;
`;
const Item = styled.li`
  position: relative;
  width: 25%;
  height: 35rem;
  // margin: 0 2rem;
  padding: ${({ theme }) => theme.padding[1]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => randomBackgroundColor(theme.listItemColors)};
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
  left: 5rem;
  background-color: transparent;
  border: none;
`;
const RemoveBtn = styled.button`
  position: absolute;
  bottom: calc(20% + 2rem);
  right: 5rem;
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

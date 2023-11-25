import styled from "styled-components";

const Section = styled.section`
  width: 100%;
`;
const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  list-style-type: none;
`;
const Item = styled.li`
  position: relative;
  width: 20%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  gap: 1rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontsSize.m};
`;
const ItemName = styled.p``;
const ItemPrice = styled.p`
  font-weight: 400;
`;
const AddBtn = styled.button`
  position: absolute;
  bottom: calc(20% + 2rem);
  left: 3rem;
  background-color: transparent;
  border: none;
`;
const RemoveBtn = styled.button`
  position: absolute;
  bottom: calc(20% + 2rem);
  right: 3rem;
  background-color: transparent;
  border: none;
`;

export {
  Section,
  List,
  Item,
  ItemImgContainer,
  ItemImg,
  ItemDescriptionContainer,
  ItemName,
  ItemPrice,
  AddBtn,
  RemoveBtn,
};

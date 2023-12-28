import { styled } from "styled-components";

const ShoppingCard = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: rgba(41, 41, 41, 0.8);
  z-index: 999;
`;
const Cart = styled.section`
  width: 50%;
  height: 100vh;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${({ theme }) => theme.padding[1]};
  background-color: white;
`;
const CartBtn = styled.button`
  width: 20%;
  height: 2rem;
  background-color: transparent;
  border: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.1rem;
  svg {
    width: 0.9rem;
    height: 0.7rem;
    margin-right: 0.5rem;
    transform: rotate(270deg);
  }
`;
const CartHeader = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  h1 {
    font-size: ${({ theme }) => theme.fontsSize.doubleL};
  }
  span {
    font-weight: 600;
  }
`;
const CartListHeader = styled.ul`
  display: flex;
  list-style: none;
  li {
    width: 12.5%;
    text-align: center;
  }
  & li:first-child {
    width: 50%;
    text-align: left;
  }
`;
const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Item = styled.li`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
`;
const ItemImg = styled.div`
  width: 10%;
  height: 100%;
  img {
    weight: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ItemName = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  & p:first-child {
    width: 100%;
    font-size: ${({ theme }) => theme.fontsSize.l};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
  }
  & p:last-child {
    font-size: ${({ theme }) => theme.fontsSize.m};
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 0.1rem;
  }
`;
const ItemCapacity = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
`;
const ItemBtns = styled(ItemCapacity)`
  button {
    width: 1.3rem;
    height: 1.3rem;
    border: none;
    background-color: transparent;
  }
`;
const ItemPrice = styled(ItemCapacity)``;
const ItemRemove = styled(ItemCapacity)`
  button {
    background-color: transparent;
    border: none;
  }
`;
const CartSummary = styled.section`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.padding[1]};
`;

export {
  ShoppingCard,
  Cart,
  CartBtn,
  CartHeader,
  CartListHeader,
  CartList,
  Item,
  ItemImg,
  ItemName,
  ItemCapacity,
  ItemBtns,
  ItemPrice,
  ItemRemove,
  CartSummary,
};
